#!/bin/bash

# Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations and seeders (now safe because seeders use firstOrCreate)
php artisan migrate --force --seed

# Start PHP-FPM (in background) and Nginx
php-fpm -D && nginx -g "daemon off;"
