const Book = require("../model/Book");
const { OAuth2Client } = require('google-auth-library');
//const User = require('../models/User'); // Update with the correct path to your User model
const jwt = require('jsonwebtoken');
const client = new OAuth2Client('google client id');  // Replace with your Google Client ID



const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};


// Function to handle Google Login
exports.googleLogin = async (req, res) => {
  const { token } = req.body;  // Extract token from request body

  try {
    // Verify the token with Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: 'google client id',  // Replace with your Google Client ID
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload; // Extract user info from payload

    // Check if the user exists in your database
    let user = await User.findOne({ googleId: sub });
    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        googleId: sub,
        email,
        name,
        avatar: picture,
      });
      await user.save();
    }

    // Generate a JWT token
    const tokenToSend = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    
    // Send back a success response with the token
    res.json({ success: true, token: tokenToSend });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(401).json({ success: false, message: 'Invalid Google token' });
  }
};


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
