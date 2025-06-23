###
### Stage 1 – build the Angular 20 app
###
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci --no-audit --progress=false

COPY . .
RUN npm run build -- --configuration production

###
### Stage 2 – serve with Nginx
###
FROM nginx:1.27-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/MacroFilesFrontend/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]