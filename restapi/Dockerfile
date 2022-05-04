FROM node:16.13.1
LABEL org.opencontainers.image.source https://github.com/Arquisoft/dede_es5c
COPY . /app
WORKDIR /app
#Install the dependencies
RUN npm install
ARG MONGODB_URI="database"
ENV MONGODB_URI=$MONGODB_URI
CMD [ "npm", "start" ]