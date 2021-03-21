FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD index.js ./

# GITHUB_SHA gets set as environment variable during build
ARG GITHUB_SHA
ENV GITHUB_SHA=$GITHUB_SHA

EXPOSE 3000

CMD ["node", "index.js"]
