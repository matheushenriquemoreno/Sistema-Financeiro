FROM node:18-alpine As development

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@10.0.0

WORKDIR /home/node/app

USER node