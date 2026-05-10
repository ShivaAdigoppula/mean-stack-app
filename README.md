# MEAN Stack App Deployment on AWS EC2 with Docker Compose

## Overview

This project demonstrates how to build and deploy a multi-container application on AWS EC2 using Docker and Docker Compose.

The application includes:
- **Angular** frontend
- **Node.js + Express** backend
- **MongoDB** database

The main focus of this project is not full-stack development itself, but understanding how applications are containerized, deployed, connected, and troubleshooted in a cloud environment.

---

## Architecture

The application is split into three services:

1. **Frontend**
   - Built with Angular
   - Served through Nginx inside a Docker container

2. **Backend**
   - Built with Node.js and Express
   - Exposes API endpoints to fetch and store messages

3. **Database**
   - MongoDB container
   - Stores application data

### High-level flow

User Browser → Angular Frontend → Express Backend → MongoDB

---

## Tech Stack

- Angular
- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- AWS EC2
- Linux
- Git / GitHub

---

## Project Structure

```text
mean-stack-app/
├── docker-compose.yml
├── angular-app/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── nginx.conf
│   ├── package.json
│   ├── angular.json
│   ├── tsconfig.json
│   └── src/
├── express-server/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── server.js
│   └── .env
