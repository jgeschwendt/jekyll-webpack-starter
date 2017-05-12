FROM node:latest
MAINTAINER jgeschwendt

COPY ./_assets/package.json /code/_assets/package.json
COPY ./_assets/yarn.lock    /code/_assets/yarn.lock

RUN cd /code/_assets && yarn && cd ../../

COPY . /code
VOLUME /code/_assets/node_modules

EXPOSE 3000

WORKDIR /code/_assets
ENTRYPOINT yarn start
