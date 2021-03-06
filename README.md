# Homeschoolr App: Project3
Repository for homeschoolr: NU Coding Bootcamp Project 3

![homeschoolr registration](client/src/assets/images/homeschoolrreg.JPG)
![homeschoolr parent](client/src/assets/images/homeschoolrparent.JPG)


# Deployed Application Link
https://homeschoolr.herokuapp.com/


# Setup
1. Once logged in with [GitHub account](https://github.login/), clone the repo locally using link:

  ```sh
    git clone https://github.com/gideonrynn/homeschoolr-project3.git
  ```

2. Install dependencies:
```sh
  npm i
```

Also see: [Cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


# User Story
As a PARENT
I want to SCHEDULE blocks of time for my child to complete school work
and NOTIFY their teacher of any at home work issues
to help MAINTAIN a regular work schedule in the event that my child is kept home from school for an extended period of time

As a TEACHER
in the event of sudden long-term school closure
I want to help parents SCHEDULE their student's at-home schoolwork
and TRACK daily student goals 
so that I can MONITOR student progress remotely

# Usage

Parents and instructors can use this React application to view and manage work schedules for students, and send emails through the app to collaborate on assignments or request additional assistance. Instructors can view all students in a roster table, with a dropdown display showing individual student at-home work schedules. Parent can schedule periods of classwork during the day and create an individual schedule for their child.

- Schedule views and interactions run in React Scheduler
- Authentication with Passport and json web tokens, bcrypt for password hashing when stored in the database
- Emails distributed by Nodemailer
- MongoDB database/mlab in Heroku with Mongoose ODM

See #Technologies section for additional packages used.

# Technologies

This project was built using:

  - Node
  - [Axios ^0.19.2](https://www.npmjs.com/package/axios)
  - [Bcrypt ^4.1.0](https://www.npmjs.com/package/concurrently)
  - [Concurrently ^4.1.0](https://www.npmjs.com/package/concurrently)
  - [Dotenv ^8.2.0](https://www.npmjs.com/package/dotenv)
  - [Nodemon ^1.18.7](https://www.npmjs.com/package/nodemon)
  - [Express ^4.16.3](https://www.npmjs.com/package/express)
  - [Express Validator ^6.4.0](https://www.npmjs.com/package/express)
  - [If-Env ^1.0.4](https://www.npmjs.com/package/if-env)
  - [Jsonwebtoken ^8.5.1](https://www.npmjs.com/package/if-env)
  - [Material-UI ^4.9.9](https://material-ui.com/)
  - [Mongoose ^5.9.6](https://www.npmjs.com/package/mongoose)
  - [Passport ^0.4.1](https://www.npmjs.com/package/passport)
  - [Passport Local ^1.0.0](https://www.npmjs.com/package/passport-local)
  - [React ^16.13.1](https://www.npmjs.com/package/react)
  - [React-Router-Dom ^5.1.2](https://www.npmjs.com/package/react-router-dom)
  - [React-Scheduler ^2.6.1](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/getting-started/)
  


# Collaborators

FrontEnd
- Liz Alexander
- Yong Lee

Backend
- Sarah Dillard (Passport Authentication, Validation, Context API)
- Kevin Suh

# BootCamp Presentation
https://docs.google.com/presentation/d/1R3yQzjOilgEpxGTVjhrB7lXMDipUpCn870MuC-BW8Wc/edit?usp=sharing

# License

This project uses the MIT License. See the full details here: https://choosealicense.com/licenses/mit/ 
