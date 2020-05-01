FROM node:12
MAINTAINER SeungEui,Hong <zaeval@among.software>

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","run","build"]

EXPOSE 3000
CMD ["npm","run","start"]


