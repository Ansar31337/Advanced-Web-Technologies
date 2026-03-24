# Lab Task 01: Course Management REST API (NestJS)

## Overview
This project is a simple RESTful API for managing university courses, built using the NestJS framework. It demonstrates the basic architecture of NestJS, including modules, controllers, and services.

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

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/course` | Get all courses |
| GET | `/course/:id` | Get course by ID |
| POST | `/course` | Create a new course |
| PUT | `/course/:id` | Update a course (Full) |
| PATCH | `/course/:id` | Update a course (Partial) |
| DELETE | `/course/:id` | Delete a course |

## Getting Started

### Installation
```bash
$ npm install
```

### Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License
This project is [MIT licensed](LICENSE).
