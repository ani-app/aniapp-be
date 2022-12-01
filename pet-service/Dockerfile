FROM node:18-alpine as base
WORKDIR /src
COPY package*.json /
EXPOSE 3002

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "--experimental-specifier-resolution=node", "bin/www.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
RUN npm install -g nodemon
COPY . /
CMD ["nodemon", "--experimental-specifier-resolution=node", "bin/www.js"]
