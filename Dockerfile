FROM mhart/alpine-node:14 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
ADD . /app
RUN npm run build

FROM nginx:1.19.6-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
