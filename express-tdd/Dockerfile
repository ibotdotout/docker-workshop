FROM mhart/alpine-node

WORKDIR /app

RUN npm install express

RUN npm install mocha
# require chai
# require supertest

COPY . /app

EXPOSE 3000
CMD npm start
