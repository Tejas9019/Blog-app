# Blog Project

## Overview

This is a full-stack blog application built using Flask for the backend and React for the frontend. The project showcases essential features such as creating, reading, updating, and deleting blog posts, along with a responsive user interface. The frontend is managed as a submodule within the main repository, allowing for modular development and deployment.

## Features

- **Backend (Flask):**
  - RESTful API with endpoints for CRUD operations on blog posts.
  - SQLite database for data storage.
  - Error handling and input validation.

- **Frontend (React):**
  - Responsive layout with a header, main content area, and footer.
  - List view of blog posts showing title and excerpts.
  - Detail view for individual blog posts.
  - Form for adding new blog posts with client-side validation.

## Project Structure

```
blog-project/
│
├── backend/                   # Flask backend
│   ├── app.py                 # Main Flask application
│   ├── models.py              # SQLAlchemy models
│   ├── routes.py              # API routes
│   ├── templates/             # HTML templates for Flask
│   ├── static/                # Static files (CSS, JS, images)
│   ├── instance/
│   │   └── config.py          # Configuration settings
│   └── migrations/            # Database migrations
│
├── frontend/                  # React frontend (as a submodule)
│   ├── public/
│   ├── src/
│   │   ├── components/        # React components (e.g., PostList, PostForm)
│   │   ├── App.js             # Main React component
│   │   ├── index.js           # Entry point for React
│   └── package.json           # Frontend dependencies and scripts
│
└── README.md                  # Project documentation
```

## Prerequisites

- Python 3.x
- Node.js and npm
- Git

## Getting Started

### 1. Clone the Repository

Clone the main repository and initialize the submodule for the frontend:

```bash
git clone --recurse-submodules <your-blog-app-repo-url>
cd blog-project
```

### 2. Setting Up the Backend (Flask)

1. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```

2. **Create a virtual environment and activate it:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required Python packages:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up the database:**

   ```bash
   flask db init
   flask db migrate -m "Initial migration."
   flask db upgrade
   ```

5. **Run the Flask application:**

   ```bash
   flask run
   ```

   The backend will be running at `http://localhost:5000`.

### 3. Setting Up the Frontend (React)

1. **Navigate to the frontend folder:**

   ```bash
   cd ../frontend
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Build the React app:**

   ```bash
   npm run build
   ```

   This will create a `build` directory containing the production build of the React app.

### 4. Serve the React App with Flask

Once the React app is built, Flask will serve the static files from the `build` directory:

1. **Ensure that the `build` directory is in the correct location:**

   Move the `build` folder into the backend’s `static` directory if necessary.

   ```bash
   mv build ../backend/static/
   ```

2. **Run the Flask app again to serve both backend and frontend:**

   ```bash
   flask run
   ```

### 5. Access the Application

Open your browser and navigate to `http://localhost:5000`. You should see the React frontend served by the Flask backend, with full functionality to create, view, update, and delete blog posts.

## Deployment

To deploy this application to a cloud service like Heroku, you need to configure the deployment settings (e.g., `Procfile`, `runtime.txt`, environment variables) as required by the platform.

### Example Deployment Steps for Heroku

1. **Log in to Heroku:**

   ```bash
   heroku login
   ```

2. **Create a new Heroku app:**

   ```bash
   heroku create your-app-name
   ```

3. **Deploy the app:**

   ```bash
   git push heroku main
   ```

4. **Run database migrations on Heroku:**

   ```bash
   heroku run flask db upgrade
   ```

5. **Open the app:**

   ```bash
   heroku open
   ```

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Acknowledgements

- Flask documentation
- React documentation
- SQLite documentation
