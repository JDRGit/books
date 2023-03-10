# Reading List App
This is a simple React app that allows users to create, read, update and delete books from a reading list. It uses Axios library to make HTTP requests to an API that is hosted locally on port 3001.

### Getting Started
To get started with this app, you can follow these steps:

### Clone this repository to your local machine.
Navigate to the project directory in your terminal or command prompt.
Run npm install to install the necessary dependencies.
Run npm start to start the development server.
Open your web browser and navigate to http://localhost:3000 to view the app.

### Usage
Once you have the app running, you can use it to manage your reading list. The app consists of two main components:

- `BookList` This component displays a list of books from the books state. It allows you to edit or delete books using the onEdit and onDelete props, respectively.

- `BookCreate` This component allows you to create a new book by entering a title and clicking the "Add Book" button.

To create a new book, simply enter a title in the input field and click the "Add Book" button. The new book will be added to the reading list.

To edit an existing book, click the "Edit" button next to the book you want to edit. This will display a form where you can enter a new title for the book. Click the "Save" button to save the changes.

To delete an existing book, click the "Delete" button next to the book you want to delete. This will remove the book from the reading list.