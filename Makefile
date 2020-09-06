install:
	npm install

start:
	npm run start

db:
	json-server db.json

server:
	node server/index.js

lint:
	npx eslint .
