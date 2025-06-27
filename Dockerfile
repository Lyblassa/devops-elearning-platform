FROM node:alpine AS build

WORKDIR /app

RUN getent group 1001 || addgroup -g 1001 -S nodejs && \
    id -u vuejs || adduser -S vuejs -u 1001 -G nodejs

COPY package*.json ./

RUN npm ci --include=dev --audit=false && \
    npm audit fix --audit-level=moderate || true

COPY . .

RUN chown -R vuejs:nodejs /app

USER vuejs

RUN npm run build

FROM nginx:alpine AS production

RUN apk update && \
    apk upgrade && \
    apk add --no-cache curl && \
    rm -rf /var/cache/apk/*

COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /var/run && \
    chown -R nginx:nginx /usr/share/nginx/html

RUN rm -f /etc/nginx/conf.d/default.conf

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
