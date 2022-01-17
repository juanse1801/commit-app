# commit-app

This is the app working without GITHUB'S API.

## Installation

git clone https://github.com/juanse1801/commit-app.git

git checkout withoutGitHubApi

# Install backend dependencies

cd api/
npm install

# Install frontend dependencies

cd client/
npm install

# Add .env variables

add a .env file in ./ with the following variables

PORT=3001

# Run with docker

then in ./

docker-compose build
docker-compose up

now you can find frontend in localhost:3000 and backend in localhost:3001
