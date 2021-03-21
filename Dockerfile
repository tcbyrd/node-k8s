FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD index.js ./

# GITHUB_SHA gets set as environmetn variable during build
ENV GITHUB_SHA=${GITHUB_SHA}

EXPOSE 3000

CMD ["node", "index.js"]
