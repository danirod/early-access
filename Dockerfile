FROM node:18-alpine

RUN mkdir /app
WORKDIR /app

RUN apk add dumb-init

ADD . .
RUN npm install && npm run build
EXPOSE 3000
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "build"]
