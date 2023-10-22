FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/mariosy-frontend/ /usr/share/nginx/html

COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint-custom.sh /
ENTRYPOINT ["/docker-entrypoint-custom.sh"]

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
