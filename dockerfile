#first stage of building react image
FROM node:alpine as build


WORKDIR /app

COPY package.json  /app/

RUN npm install --silent


COPY ./ /app/

RUN npm run build



FROM nginx:alpine
COPY --from=build /app/build  /usr/share/nginx/html

#RUN rm/etc/nginx/conf.d


COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf