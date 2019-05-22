FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD index.js ./

CMD ["node", "index.js"]
