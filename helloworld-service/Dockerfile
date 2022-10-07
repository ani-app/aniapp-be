FROM node:18-alpine as base
WORKDIR /src
COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm config rm proxy && npm config rm https-proxy --tried removing npm proxy
RUN npm install
RUN npm install -g nodemon
COPY . /
CMD ["nodemon", "bin/www"]
