FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD index.js ./

EXPOSE 3000

CMD ["node", "index.js"]
