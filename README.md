# 📦 Product API - Project Plan

A RESTful API for managing products. The API allows clients to **create, read, update, and delete** (CRUD) product data. It is designed to be scalable, secure, and easy to extend.

---

## ✨ Requirements

### Core Features
-   Add a new product
-   Update an existing product
-   Delete a product
-   Get all products
-   Get a single product by ID

### Future Features
-   Pagination
-   Filtering & Search
-   Authentication & Authorization
-   Image upload for products

---

## 📂 Project Structure

```
project-root/
├── .env
├── package.json
├── README.md
├── index.js
└── src/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── productController.js
    ├── middlewares/
    │   └── errorHandler.js
    ├── models/
    │   └── productModel.js
    ├── routes/
    │   └── productRoutes.js
    └── utils/
```

---

## 🗄️ Database Design

**Collection: Products**

| Field         | Type   | Required | Description               |
| ------------- | ------ | -------- | ------------------------- |
| `name`        | String | Yes      | Name of the product       |
| `price`       | Number | Yes      | Product price             |
| `description` | String | No       | Details about the product |
| `createdAt`   | Date   | Yes      | Auto-generated timestamp  |
| `updatedAt`   | Date   | Yes      | Auto-updated timestamp    |
| `quantity`    | Date   | Yes      | quantity of the product   |

---

## 🔌 API Endpoints

| Method   | Endpoint            | Description          | Body / Params           | Response          |
| -------- | ------------------- | -------------------- | ----------------------- | ----------------- |
| `GET`    | `/api/products`     | Get all products     | -                       | Array of products |
| `GET`    | `/api/products/:id` | Get product by ID    | `id` (param)            | Product object    |
| `POST`   | `/api/products`     | Create new product   | `{name, price, desc}`   | Created product   |
| `PUT`    | `/api/products/:id` | Update product by ID | `id` (param), body fields | Updated product   |
| `DELETE` | `/api/products/:id` | Delete product by ID | `id` (param)            | Success message   |

---

## 🛠️ Tech Stack

-   **Node.js + Express** → Backend framework
-   **MongoDB + Mongoose** → Database
-   **dotenv** → Environment configuration
-   **helmet, morgan, cors** → Security & logs
-   **Postman/Thunder Client** → API testing

---

## 🚀 How to Run

1.  **Clone the repository**
    ```bash
    git clone https://github.com/username/product-api.git
    cd product-api
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the root directory and add your variables:
    ```env
    PORT=5000
    MONGO_URL="your-mongo-db-connection-string"
    ```

4.  **Start the server**
    ```bash
    npm start
    ```

---

## 🧪 Testing

Use Postman or Thunder Client to test the API endpoints.

**Example:**
```http
GET http://localhost:5000/api/products
```

---

## 🔮 Future Improvements

-   Authentication (JWT)
-   Role-based access (admin/user)
-   Cloud image storage (AWS S3, Cloudinary)
