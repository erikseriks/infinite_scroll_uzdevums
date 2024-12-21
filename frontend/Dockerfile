# develop stage
FROM node:22 AS develop-stage
WORKDIR /app

# build stage
FROM develop-stage AS build-stage
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine-slim AS production-stage
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 3000
