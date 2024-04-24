# Book Management System REST API

This repository contains a Book Management System REST API built using Express.js and Node.js. The API allows users to perform CRUD operations on books stored in in a Database (here we use MongoDB) and provides additional functionality for querying books by author or publishing year.

## Getting Started

To use this API, follow the steps below:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/VipEvel/book-library-apis.git
```

2. Navigate to the project directory:

```bash
cd book-library-api
```

3. Install the dependencies:

```bash
npm install
or
npm i
```

4. Start the development server:

```bash
npm run start
or
npm start
```

The server will be running at `http://localhost:3001`.

## API Endpoints

### Retrieve all books

- **Endpoint:** GET `/library/books`
- **Description:** Fetches all books from the DB and returns them as a JSON response.
- **Example Request:** `/library/books`
- **Example Response:**

```json
[
    {
        "_id": "6628fdc582c15df5f97921f8",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publication_year": 1960,
        "createdAt": "2024-04-24T12:40:37.118Z",
        "updatedAt": "2024-04-24T12:40:37.118Z",
        "__v": 0
    },
    {
        "_id": "6628fddd82c15df5f97921fb",
        "title": "1984",
        "author": "George Orwell",
        "publication_year": 1949,
        "createdAt": "2024-04-24T12:41:01.284Z",
        "updatedAt": "2024-04-24T12:41:01.284Z",
        "__v": 0
    }
    // ...more books
]
```

### Retrieve a specific book

- **Endpoint:** GET `/library/book/:id`
- **Description:** Fetches a specific book by its ID and returns its details as a JSON response.
- **Example Response:**

```json
{
    "_id": "6628fdc582c15df5f97921f8",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publication_year": 1960,
    "createdAt": "2024-04-24T12:40:37.118Z",
    "updatedAt": "2024-04-24T12:40:37.118Z",
    "__v": 0
}
```

### Add a new book

- **Endpoint:** POST `/library/add/book`
- **Description:** Adds a new book to the DB based on the data provided in the request body.
- **Request Body:**

```json
{
  "title": "New Book",
  "author": "New Author",
  "publication_year": 2024
}
```

### Update a book

- **Endpoint:** PUT `/library/update/book/:id`
- **Description:** Updates a specific book by its ID using the data provided in the request body.
- **Request Body:**

```json
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "publication_year": 2021
}
```

### Delete a book

- **Endpoint:** DELETE `/library/delete/book/:id`
- **Description:** Deletes a specific book by its ID from the DB.

### Query books by author name

- **Endpoint:** GET `/library/books?author=authorname`
- **Description:** Retrieves a list of books that match the provided name from the DB.
- **Example Request:** `/api/books?author=Harper Lee`

```json
{
    "_id": "6628fdc582c15df5f97921f8",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publication_year": 1960,
    "createdAt": "2024-04-24T12:40:37.118Z",
    "updatedAt": "2024-04-24T12:40:37.118Z",
    "__v": 0
}
```

### Query books by publishing year

- **Endpoint:** GET `/library/books?publication_year=yearvalue`
- **Description:** Retrieves a list of books published in the provided year from the JSON file.
- **Example Request:** `/library/books?publication_year=1960`

``` json
[
    {
        "_id": "6628fdc582c15df5f97921f8",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publication_year": 1960,
        "createdAt": "2024-04-24T12:40:37.118Z",
        "updatedAt": "2024-04-24T12:40:37.118Z",
        "__v": 0
    }
]
```

## Error Handling

The API is designed to handle appropriate status codes and error scenarios. If a request is made to a non-existing endpoint, the API will respond with a 404 Not Found status code. Additionally, specific error messages will be returned for various validation and handling errors, such as trying to retrieve a non-existing book or providing invalid data for book creation and update.


## Conclusion

This Book Management System REST API provides a user-friendly interface for managing books effectively. The API's well-structured code and comprehensive documentation make it easy to integrate into your applications. Feel free to explore the API and leverage its capabilities to handle CRUD operations, search for books, and more.


## Thank You <3
