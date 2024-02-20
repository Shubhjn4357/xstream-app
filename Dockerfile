FROM node:lts

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm run build

RUN npm install

COPY . ./

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5000

CMD ["npm", "run", "dev"]