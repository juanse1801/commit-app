FROM node:14

RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY ./api/package.json /usr/src/api/
RUN npm install

COPY .git/ /usr/src/api
COPY ./api/ /usr/src/api

EXPOSE 3001

CMD [ "npm", "start" ]
