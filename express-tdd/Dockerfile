FROM mhart/alpine-node

WORKDIR /app

RUN npm install express mocha chai supertest

COPY . /app

EXPOSE 3000
CMD npm start
