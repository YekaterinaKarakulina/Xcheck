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
 - valid-url
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
 - /task-form
 - /task-edit-form/:id
 - /tasks-description/:id

 - /cross-check-sessions
 - /cross-check-sessions/cross-check-session-form
 - /cross-check-sessions/cross-check-session-edit-form
 - /cross-check-sessions/:id

 - /review-requests
 - /review-requests/review-request-form

 - /check

 - /reviews
 - /reviews/:id

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
