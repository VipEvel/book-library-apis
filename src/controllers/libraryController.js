const Book = require("../model/librarySchema");

module.exports = {
  addBook: async (req, res) => {
    try {
      // Check if the book already exists
      const existingBook = await Book.findOne({
        title: req.body.title,
        author: req.body.author,
      });

      if (existingBook) {
        return res.status(400).send({ message: "Book already exists" });
      }

      // If the book doesn't exist, create and save it
      const book = new Book(req.body);
      await book.save();
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getAllBooks: async (req, res) => {
    try {
      let query = {};
      if (req.query.author) {
        query.author = req.query.author;
      }
      if (req.query.publication_year) {
        query.publication_year = req.query.publication_year;
      }
      const books = await Book.find(query);
      res.send(books);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).send({ message: "Book not found" });
      }
      res.send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  updateBookById: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!book) {
        return res.status(404).send({ message: "Book not found" });
      }
      res.send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  deleteBookById: async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).send({ message: "Book not found" });
      }
      res.send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
