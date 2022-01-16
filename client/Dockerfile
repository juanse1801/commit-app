FROM node:14

RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]


COPY ["package.json","package-lock.json", "./"]

WORKDIR /client

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]