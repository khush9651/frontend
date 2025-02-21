# BFHL Frontend

## Objective
Develop and deploy a frontend application that interacts with a backend API to process input and render the response. The application should validate and display JSON data according to the requirements.

## Features
- Accepts JSON input from the user.
- Validates JSON format before submission.
- Calls a REST API to process the data.
- Displays the response dynamically based on user-selected filters.
- Includes a multi-select dropdown with options:
  - **Alphabets**
  - **Numbers**
  - **Highest Alphabet**
- Updates the website title with the roll number.

## Project Structure
```
project-folder/
│── build/               # Build folder for Netlify deployment
│── public/              # Public assets
│   ├── index.html       # Main HTML file
│   ├── _redirects       # Redirects for Netlify
│── src/                 # Source code
│   ├── components/      # React components
│   │   ├── InputForm.js
│   │   ├── ResponseDisplay.js
│   ├── App.js           # Main application component
│   ├── index.js         # React entry point
│── package.json         # Project configuration
│── package-lock.json    # Dependency lock file
│── README.md            # Project documentation
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
   cd YOUR_REPOSITORY_NAME
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Deployment (Netlify)
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy the `build/` folder to Netlify.

## Issues
If you encounter any issues, check the console logs or create an issue on GitHub.

---
Developed by [Your Name]

