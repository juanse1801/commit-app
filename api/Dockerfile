FROM node:14

RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]


COPY ["package.json","package-lock.json", "./","../.git"]

WORKDIR /api

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]
