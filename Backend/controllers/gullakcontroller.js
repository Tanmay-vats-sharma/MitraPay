const User = require("../models/user");
const Gullak = require("../models/gullak");
const ApiError = require("../utils/ApiError");

const GullakController = {

  getGullaks: async (req, res, next) => {
    const { email } = req.user;

    try {
      const
        user = await User.findOne({ email }).populate({
          path: "gullak",
          select : "-_id -__v -user",
        });

      if (!user) {
        return next(new ApiError(404, "User not found"));
      }

      res.status(200).json({ 
        gullaks: user.gullak,
        status: "success",
      });
    } catch (error) {
      next(new ApiError(500, "Internal server error"));
    }
  },

  createGullak: async (req, res, next) => {
    const { name, total_amt } = req.body;
    const { email } = req.user;

    try {
      const user = await User.findOne({ email }).populate("wallet");

      if (!user) {
        return next(new ApiError(404, "User not found"));
      }

      const gullak = new Gullak({
        name,
        total_amt,
        user: user._id,
      });

      const savedGullak = await gullak.save();

      user.gullak.push(savedGullak._id);
      await user.save();

      console.log(savedGullak.toJSON());

      res.status(201).json({
        message: "Gullak created successfully!",
        gullak: savedGullak.toJSON(),
        status: "success",
      });
    } catch (error) {
      next(new ApiError(500, "Internal server error"));
    }
  },

  deleteGullak: async (req, res, next) => {
    const { gullakName } = req.params;
    const { email } = req.user;

    try {
      const user = await User.findOne({ email }).populate("wallet");
      console.log(gullakName);
      if (!user) {
        return next(new ApiError(404, "User not found"));
      }

      const wallet = user.wallet;
      const gullak = await Gullak.findOneAndDelete({ user: user._id, name: gullakName });

      if (!gullak) {
        return next(new ApiError(404, "Gullak not found"));
      }

      wallet.balance += gullak.current_amt;
      await wallet.save();

      console.log(gullak._id);

      user.gullak = user.gullak.filter((id) => id.toString() !== gullak._id.toString());
      await user.save();

      res.status(200).json({
        message: "Gullak deleted and money returned to wallet",
        wallet: wallet,
        status: "success",
      });
    } catch (error) {
      next(new ApiError(500, "Internal server error"));
    }
  },

  addMoney: async (req, res, next) => {
    const { gullakName, amount } = req.body;
    const { email } = req.user;
    
    try {
      const user = await User.findOne({ email }).populate("wallet");
      if (!user) {
        return next(new ApiError(404, "User not found"));
      }

      const wallet = user.wallet;
      const gullak = await Gullak.findOne({ user: user._id, name: gullakName });

      if (!gullak) {
        return next(new ApiError(404, "Gullak not found"));
      }

      if (wallet.balance < amount) {
        return next(new ApiError(400, "Insufficient balance"));
      }

      if (amount < 0) {
        return next(new ApiError(400, "Amount should be positive"));
      }

      wallet.balance -= amount;
      gullak.current_amt += amount;
      await wallet.save();
      await gullak.save();

      res.status(200).json({
        message: "Money added to gullak successfully",
        wallet: wallet,
        gullak: gullak,
        status: "success",
      });

    } catch (error) {
      return next(new ApiError(500, "Internal server error"));
    }
  }
};

module.exports = GullakController;
