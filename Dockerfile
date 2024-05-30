FROM node:20-alpine 

RUN apk add --no-cache python3 g++ make

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server"]

