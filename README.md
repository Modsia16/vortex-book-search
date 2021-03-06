# Book Search Engine

  ## Table of Contents

  * [User-story](#user-story)
  * [About](#about)
  * [Build](#build)
  * [Criteria](#criteria)
  * [Installation](#installation)
  * [Demo](#demo)
  * [Contributing](#contributing)
  
  ## User Story

Your assignment this week is emblematic of the fact that most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant.

  ## About

Taking starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end. 

## Criteria

I want to search for new books to read so that I can keep a list of book purchases
- When I load the search engine then I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
- When I click on the Search for Books menu option then I am presented with an input field to search for books and a submit button
- When I am not logged in and enter a search term in the input field and click the submit button then I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
- When I click on the Login/Signup menu option then a modal appears on the screen with a toggle between the option to log in or sign up
- When the toggle is set to Signup then I am presented with three inputs for a username, an email address, and a password, and a signup button
- When the toggle is set to Login then I am presented with two inputs for an email address and a password and login button
- When I enter a valid email address and create a password and click on the signup button then my user account is created and I am logged in to the site
- WHEN I enter my account’s email address and password and click on the login button then I the modal closes and I am logged in to the site
- When I am logged in to the site then the menu options change to Search for Books, an option to see my saved books, and Logout
- When I am logged in and enter a search term in the input field and click the submit button then I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
- When I click on the Save button on a book then that book’s information is saved to my account
- When I click on the option to see my saved books then I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
- When I click on the Remove button on a book then that book is deleted from my saved books list
- When I click on the Logout button then I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 

  ## Build

    - React 
    - Express
    - Mongodb/Mongoose
    - Graphql
    - JWT
    - Bootstrap
    - bcrypt

  ## Installation 
  
    - Git clone repo 
    - In terminal npm install
    - npm run develop 

  ## Demo and Links

  ![demo](./#)

  ## Contributing 

  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

  Please make sure to update tests as appropriate. 