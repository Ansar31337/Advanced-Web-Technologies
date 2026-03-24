# Course Management API

A RESTful API built with [NestJS](https://nestjs.com/) for managing university courses. This project demonstrates the fundamentals of NestJS architecture including modules, controllers, services, and dependency injection.

## Overview

This application implements a Course Management system as part of **Lab Task 01** for the Advanced Web Technologies course. It follows the standard NestJS architectural pattern:

- **Module** → Organizes related components
- **Controller** → Handles incoming HTTP requests and returns responses
- **Service** → Contains the business logic

## Project Structure

```
course-management-api/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── course/
│       ├── course.module.ts
│       ├── course.controller.ts
│       └── course.service.ts
├── test/
├── package.json
├── tsconfig.json
└── nest-cli.json
```

## API Endpoints

| Method   | Endpoint        | Description              | Example Response                          |
| -------- | --------------- | ------------------------ | ----------------------------------------- |
| `GET`    | `/course`       | Retrieve all courses     | `Get All Courses - from Service`          |
| `GET`    | `/course/:id`   | Retrieve a course by ID  | `Get Course with ID: 5 - from Service`    |
| `POST`   | `/course`       | Create a new course      | `Create Course - from Service`            |
| `PUT`    | `/course/:id`   | Fully update a course    | `Update Course 5 - from Service`          |
| `PATCH`  | `/course/:id`   | Partially update a course| `Patch Course 5 - from Service`           |
| `DELETE` | `/course/:id`   | Remove a course          | `Delete Course 5 - from Service`          |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
$ npm install
```

### Running the Application

```bash
# development mode (with hot-reload)
$ npm run start:dev

# standard mode
$ npm run start

# production mode
$ npm run start:prod
```

The server will start at `http://localhost:3000`.

### Testing the Endpoints

You can test the API using a browser, [Postman](https://www.postman.com/), or `curl`:

```bash
# Get all courses
curl http://localhost:3000/course

# Get course by ID
curl http://localhost:3000/course/5

# Create a course
curl -X POST http://localhost:3000/course

# Update a course
curl -X PUT http://localhost:3000/course/5

# Partially update a course
curl -X PATCH http://localhost:3000/course/5

# Delete a course
curl -X DELETE http://localhost:3000/course/5
```

## Running Tests

```bash
# unit tests
$ npm run test

# end-to-end tests
$ npm run test:e2e

# test coverage report
$ npm run test:cov
```

## Built With

- [NestJS](https://nestjs.com/) — A progressive Node.js framework for building server-side applications
- [TypeScript](https://www.typescriptlang.org/) — Typed superset of JavaScript

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).
