const router = require("express").Router();
const { isloggedin } = require("../middlewares/auth");
const transactionController = require("../controllers/transactionController");

router.post("/pay", isloggedin, transactionController.payMoney);
router.get("/viewTransactions", isloggedin, transactionController.viewTransactions);
router.post("/add-money", isloggedin, transactionController.addMoney);
router.post("/webhook",transactionController.paymentWebhook);

module.exports = router;