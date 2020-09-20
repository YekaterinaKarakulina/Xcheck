# Xcheck
The web application which help review tasks during Rolling Scopes School education process (mentor`s review or other students review).
Application includes tasks, review requests, reviews, cross-check sessions.
It can help to improve tasks review process.

---

## Technology stack
 - React
 - Redux
 - Redux-saga
 - Javascript

## Development tools
 - Webpack
 - EsLint
 - Babel

## Additional packages
 - antd
 - redux-form
 - uuid
 - moment
 - lodash
 - react-highlight-words

---

## Installation
```bash
git clone https://github.com/YekaterinaKarakulina/Xcheck.git
cd Xcheck
npm install (make install)
```

## Run app with npm
```bash
npm run dev-server
json-server db.json
node server/index.js 
```

## Run app with make
```bash
make db
make auth
make start
```

## Usage

### Database entities
 - /users
 - /tasks
 - /crossCheckSessions
 - /reviewRequests
 - /reviews

 ### Routes
 - /login

 - /tasks
 - /tasks/task-form
 - /tasks/task-edit-form
 - /tasks/:id

 - /cross-check-sessions
 - /cross-check-sessions/cross-check-session-form
 - /cross-check-sessions/cross-check-session-edit-form
 - /cross-check-sessions/:id

 - /review-requests
 - /review-requests/review-request-form

 - /check

 - /reviews
 - /reviews/:id

## Extra features
 ### Tasks:
 - tasks filters and sorting by title, author and status
 - task preview

  ### Review Requests:
 - redirecting to task preview from review requests table

 ### Reviews:
 - extra table for crossCheck sessions reviews
 - redirecting to task preview from reviews table

 ### CrossCheck sessions:
 - redirecting to task preview from crossCheck sessions table
 - crossCheck session preview


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
