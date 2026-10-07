# RESTful Authentication Microservice

![Build & Test Integration](https://github.com/JPF3312/backend-jwt-service/actions/workflows/ci.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)
![Docker](https://img.shields.io/badge/Docker-Containers-blue)

🌐 **Live Production API:** [https://backend-jwt-service.onrender.com](https://backend-jwt-service.onrender.com)

Containerized RESTful API microservice built with **Node.js**, **Express**, and **PostgreSQL**, running in **Docker Compose**. Features secure authentication using **JSON Web Tokens (JWT)** and password hashing with **Bcrypt**.
---

## Features

- **User Authentication:** Registration and Login endpoints with encrypted password validation (`bcryptjs`).
- **Stateless Authorization:** Secure route protection using signed JWTs.
- **Relational Database:** Integrated **PostgreSQL** database with volume persistence.
- **Automated Initialization:** Auto-executing SQL scripts for table setup on container startup.
- **Containerized Architecture:** Fully managed multi-container environment via **Docker Compose**.
- **CI/CD Integration:** Automated integration pipeline with **GitHub Actions**.

---

## Tech Stack

- **Runtime & Framework:** Node.js, Express.js
- **Database:** PostgreSQL (`pg` driver)
- **Security:** JSON Web Tokens (`jsonwebtoken`), Bcrypt (`bcryptjs`)
- **DevOps & OS:** Docker, Docker Compose, Ubuntu Linux, GitHub Actions

---

## Getting Started

### Prerequisites
- Docker & Docker Compose installed
- Git

### Running with Docker Compose

1. Clone the repository:
   ```bash
   git clone [https://github.com/JPF3312/backend-jwt-service.git](https://github.com/JPF3312/backend-jwt-service.git)
   cd backend-jwt-service
