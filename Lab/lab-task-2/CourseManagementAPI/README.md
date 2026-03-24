# Lab Task 02: Course Management REST API (NestJS)
## Input Validation, DTOs, Pipes & File Upload

## Overview
This project extends Lab Task 01 by adding input validation using DTOs and Pipes, and implementing a file upload feature for course materials. It demonstrates advanced NestJS features for building robust and secure APIs.

## Project Structure
```
course-management-api/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── course/
│       ├── dto/
│       │   ├── create-course.dto.ts
│       │   └── update-course.dto.ts
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
| POST | `/course` | Create new course (Validated) |
| PUT | `/course/:id` | Update course (Full, Validated) |
| PATCH | `/course/:id` | Update course (Partial, Validated) |
| DELETE | `/course/:id` | Delete course |
| POST | `/course/:id/upload` | Upload course material (File) |

## Requirements & Steps

### Step 1: Install Required Packages
```bash
npm install class-validator class-transformer @nestjs/platform-express multer @nestjs/mapped-types
npm install -D @types/multer @types/express
```

### Step 2: Enable Global Validation in main.ts
Enabled `ValidationPipe` globally with `whitelist`, `forbidNonWhitelisted`, and `transform`.

### Step 3: Create DTOs
Created `CreateCourseDto` and `UpdateCourseDto` (using `PartialType`) in the `dto/` folder.

### Step 4: Update Service Methods
Updated all service methods to return structured JSON objects.

### Step 5: Update Controller
Implemented `@Body()` validation and file upload using `FileInterceptor` and `diskStorage`.

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
