const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");

router.get("/books", libraryController.getAllBooks);
router.get("/book/:id", libraryController.getBookById);
router.post("/add/book", libraryController.addBook);
router.put("/update/book/:id", libraryController.updateBookById);
router.delete("delete/book/:id", libraryController.deleteBookById);

module.exports = router;
