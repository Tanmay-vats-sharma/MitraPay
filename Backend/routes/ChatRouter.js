const router = require("express").Router();

const { isloggedin } = require("../middlewares/auth");
const ChatController = require("../controllers/chatController");

router.get("/", isloggedin, ChatController.getContacts);
router.post("/create", isloggedin, ChatController.createContact);
router.get("/:contactId", isloggedin, ChatController.getMessages);
router.post("/send/:contactId", isloggedin, ChatController.sendMessage);

module.exports = router;