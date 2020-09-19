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

## How to deploy 
  - deploy your db data https://github.com/jesperorb/json-server-heroku
  - go to github.com > Settings > Developer settings > OAuth Apps > Create new OAuth App > fill fields with app info > Register application https://docs.github.com/en/developers/apps/creating-an-oauth-app
  - deploy auth server on path /auth-server-heroku/index.js on heroku as separate repository using heroku cli or connect to github repository;
  make sure you has procfile, that starts server file;
  reveal config vars in heroku dashboard > settings; add keys: CLIENT_ID, CLIENT_SECRET with values you got for clientId and clientSecret in previous step and key PORT with needed value
  - edit src/env.js file:
    ```bash
    const env = {
      clientId: <clientId from registered Github OAuth app>,
      dbBaseURL: <deployed db url>,
      authBaseURL: <deployed auth server url>,
      appBaseURL: <app url you will deploy>,
    };
    ```
  - deploy app on heroku using heroku cli or connect to github repository
  - reveal config vars in heroku dashboard > settings; add PORT key with needed value (3001 in our case)

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
