FROM node:17-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g


COPY . .

EXPOSE 8080

CMD [ "pm2-runtime", "src/date-a-base.js" ]
