# 📝 Express Posts App

A simple **CRUD (Create, Read, Update, Delete) web application** built using **Node.js, Express.js, EJS, and UUID**.

This project allows users to create posts, view posts, edit post content, and delete posts.

## 🚀 Features

* Create a new post
* View all posts
* View a single post
* Edit an existing post
* Delete a post
* Generate unique IDs using UUID
* Use HTTP methods like `PATCH` and `DELETE` with `method-override`
* Render dynamic pages using EJS
* Serve static files using Express

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **EJS**
* **UUID**
* **Method-Override**
* HTML/CSS

## 📂 Project Structure

```text
project-folder/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 📦 Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Move into the project directory

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

If the dependencies are not already listed in `package.json`, install them using:

```bash
npm install express ejs uuid method-override
```

## ▶️ Running the Project

Start the server using:

```bash
node index.js
```

You should see:

```text
app is listening at 8080
```

Now open your browser and visit:

```text
http://localhost:8080/posts
```

## 🔗 Routes

| Method | Route             | Description                       |
| ------ | ----------------- | --------------------------------- |
| GET    | `/posts`          | Display all posts                 |
| GET    | `/posts/new`      | Display form to create a new post |
| POST   | `/posts`          | Create a new post                 |
| GET    | `/posts/:id`      | Display a single post             |
| GET    | `/posts/:id/edit` | Display edit form                 |
| PATCH  | `/posts/:id`      | Update a post                     |
| DELETE | `/posts/:id`      | Delete a post                     |

## 🔄 CRUD Operations

### Create

A new post is created using:

```http
POST /posts
```

The username and content are received through `req.body`.

A unique ID is generated using:

```javascript
let id = uuidv4();
```

### Read

All posts can be viewed at:

```text
/posts
```

A particular post can be viewed using:

```text
/posts/:id
```

The post is found using:

```javascript
let post = posts.find((p) => id === p.id);
```

### Update

Posts are updated using the `PATCH` method:

```text
PATCH /posts/:id
```

`method-override` allows HTML forms to send PATCH requests.

```javascript
app.use(methodOverride("_method"));
```

The post content is then updated:

```javascript
post.content = newContent;
```

### Delete

A post can be deleted using:

```text
DELETE /posts/:id
```

The post is removed from the array using:

```javascript
posts = posts.filter((p) => id !== p.id);
```

## 🧠 How It Works

The application stores posts temporarily inside a JavaScript array:

```javascript
let posts = [
    {
        id: uuidv4(),
        username: "Anmisha",
        content: "enjoy coding"
    },
    {
        id: uuidv4(),
        username: "Shradha",
        content: "I Love coding!"
    }
];
```

Since there is **no database**, all posts will be lost whenever the server restarts.

## 📌 Important Note

This project currently uses an **in-memory JavaScript array** instead of a database.

For a production application, the project could be extended by adding:

* MongoDB / MySQL / PostgreSQL
* User authentication
* Persistent post storage
* Input validation
* Error handling
* Better UI and responsive design

## 🎯 Learning Objectives

This project demonstrates the fundamentals of:

* Express.js routing
* RESTful routes
* HTTP methods
* CRUD operations
* EJS templating
* Express middleware
* `req.params`
* `req.body`
* `method-override`
* UUID-based unique IDs
* Serving static files
* Redirects and rendering views

## 👩‍💻 Author

**Anmisha Dash**

Built as a learning project while practicing **Node.js and Express.js**.

⭐ If you like this repository or find it helpful, consider giving it a Star!