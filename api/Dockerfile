FROM node:14

RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]


COPY ["package.json","package-lock.json", "./"]

WORKDIR /api

RUN npm install

COPY . .

COPY .git/ ././git/

EXPOSE 3001

CMD ["node", "index.js"]
