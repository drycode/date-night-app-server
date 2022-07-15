FROM node:17-alpine

WORKDIR /usr/src/app

COPY /server/package*.json ./

RUN npm install

COPY /database/seed_db.js /usr/src/app/database/
COPY ../server/.env.development /usr/src/app/server/
COPY ../server/src/models /usr/src/app/server/src/models
COPY ../server/src/clients /usr/src/app/server/src/clients
COPY ../server/src/constants.js /usr/src/app/server/src/constants.js


CMD [ "node", "database/seed_db.js" ]
