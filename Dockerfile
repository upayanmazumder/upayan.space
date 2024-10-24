FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3100
EXPOSE 3110

CMD ["npm", "run", "api"]
