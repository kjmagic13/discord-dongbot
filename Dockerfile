FROM node:alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm install 
# RUN npm install --quiet

COPY . .

RUN npm run build

CMD [ "node", ".output/server/index.mjs" ]
