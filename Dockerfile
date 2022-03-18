FROM node:16-alpine

WORKDIR /usr/app

COPY package*.json ./
ENV YARN_VERSION 1.22.17
RUN yarn
COPY . .

EXPOSE 5000

CMD npm run dev 