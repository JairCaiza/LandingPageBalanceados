# Etapa 1: Build
FROM node:20-alpine AS build
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todo el proyecto y construir la app
COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

# Copiar los archivos de build al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración opcional de Nginx (si quieres personalizar headers, gzip, etc)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
