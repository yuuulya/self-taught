FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci 

COPY index.js .

ENTRYPOINT [
    "node",
    "index.js"
]
// docker build -f Dockerfile -t fun-docker .
//docker images 
//docker run -d -p 8080:8080 fun-docker 
//docker ps : 현재 실행중인 docker 
//docker logs + ID 

