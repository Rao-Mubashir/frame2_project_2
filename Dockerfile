# Stage 1: Build React
FROM node:22-alpine as frontend-builder
WORKDIR /app
COPY package*.json ./
# Install dependencies including vite
RUN npm install
COPY . .
# Build the React app
RUN npm run build

# Stage 2: PHP Environment
FROM php:8.4-fpm
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libpq-dev \
    nginx

RUN apt-get clean && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install pdo_pgsql mbstring exif pcntl bcmath gd
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy Laravel files first
COPY backend/ /var/www/

# Copy React build artifacts to Laravel's public directory
# We copy to public so Laravel/Nginx can serve them
COPY --from=frontend-builder /app/dist/ /var/www/public/

# Install composer dependencies
RUN composer install --no-dev --optimize-autoloader

# Setup Nginx
COPY backend/nginx/conf.d/app.conf /etc/nginx/conf.d/default.conf

# Setup entrypoint
COPY backend/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 80
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
