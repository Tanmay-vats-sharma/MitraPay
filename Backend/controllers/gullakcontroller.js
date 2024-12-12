const GullakController = {
  createGullak: async (req, res) => {
    const { userId, name, total_amt, initial_amt } = req.body;

    try {
      const user = await User.findById(userId).populate("wallet");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const wallet = user.wallet;

      if (wallet.balance < initial_amt) {
        return res
          .status(400)
          .json({ message: "Insufficient balance in wallet" });
      }

      const gullak = new Gullak({
        name,
        total_amt,
        current_amt: initial_amt,
      });

      const savedGullak = await gullak.save();

      wallet.balance -= initial_amt;
      await wallet.save();

      user.gullak.push(savedGullak._id);
      await user.save();

      res.status(201).json({
        message: "Gullak created successfully!",
        gullak: savedGullak,
        wallet: wallet,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteGullak: async (req, res) => {
    const { userId, gullakId } = req.params;

    try {
      const user = await User.findById(userId).populate("wallet");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const wallet = user.wallet;
      const gullak = await Gullak.findById(gullakId);

      if (!gullak) {
        return res.status(404).json({ message: "Gullak not found" });
      }

      // Add the current amount from the Gullak back to the wallet
      wallet.balance += gullak.current_amt;
      await wallet.save();

      // Remove the Gullak from the user's list
      user.gullak = user.gullak.filter((id) => id.toString() !== gullakId);
      await user.save();

      // Delete the Gullak
      await gullak.remove();

      res.status(200).json({
        message: "Gullak deleted and money returned to wallet",
        wallet: wallet,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
