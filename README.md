https://project-1-user-authentication--project-1-user-authentication.netlify.app/

# User Authentication using MERN stack

This is a MERN Stack application with a frontend built using React,ChakraUI and Typescript and a backend built using Node.js and ExpressJS.

## Backend

The backend of this application is located in the [`backend`](command:_github.copilot.openRelativePath?%5B%22backend%22%5D "backend") directory. It is structured as follows:

- server.js: This is the entry point of the backend application.
- [controllers](backend/controllers): This directory contains all the controllers for the application. For example, the userControllers.js file contains the controller functions for user-related operations.
- [models](backend/models): This directory contains all the data models for the application. For example, the User.js file defines the User model.
- [routes](backend/routes): This directory contains all the route definitions for the application. For example, the userRoutes.js file contains the routes for user-related operations.

## Frontend

The frontend of this application is located in the [`frontend/src`](command:_github.copilot.openRelativePath?%5B%22frontend%2Fsrc%22%5D "frontend/src") directory. It is structured as follows:

- main.tsx: This is the entry point of the frontend application.
- [components](frontend/src/components): This directory contains all the reusable components for the application. For example, MyInputField.tsx, MyLogo.tsx, and MyPasswordField.tsx.
- [context](frontend/src/context): This directory contains the context providers for the application. For example, the AuthContext.tsx file provides an authentication context for the application.
- [hooks](frontend/src/hooks): This directory contains custom React hooks for the application. For example, useAuth.ts provides a hook for accessing the authentication context.
- [pages](frontend/src/pages): This directory contains all the page components for the application. For example, HomePage.tsx, LoginPage.tsx, and RegisterPage.tsx.

## Installation

To install the dependencies for this project, you can use either npm or yarn:

```sh
npm install
# or
yarn install
```

## Running the Application


To start the application, in the root directory run:

```sh
npm run dev
# or
yarn dev
```
