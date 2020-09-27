install:
	npm install

start:
	npm run dev-server

db:
	json-server db.json

auth:
	node auth-server/index.js

lint:
	npx eslint .

test:
	npm run test
