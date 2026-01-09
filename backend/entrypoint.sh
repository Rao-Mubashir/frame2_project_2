#!/bin/bash

# Cache configuration
echo "Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations and seeders
if [ "$DB_FRESH" = "true" ]; then
    echo "Forcing fresh migration and seeding..."
    php artisan migrate:fresh --force --seed
else
    echo "Running standard migrations and seeding..."
    php artisan migrate --force --seed
fi

echo "Starting server..."
# Start PHP-FPM (in background) and Nginx
php-fpm -D && nginx -g "daemon off;"
