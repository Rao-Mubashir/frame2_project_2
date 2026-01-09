#!/bin/bash

# Ensure SQLite file exists if using sqlite
if [ "$DB_CONNECTION" = "sqlite" ] || [ -z "$DB_CONNECTION" ]; then
    echo "Using SQLite. Ensuring database file exists..."
    mkdir -p database
    touch database/database.sqlite
fi

# Cache configuration
echo "Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations and seeders
echo "Running migrations and seeding..."
php artisan migrate --force --seed

echo "Starting server..."
# Start PHP-FPM (in background) and Nginx
php-fpm -D && nginx -g "daemon off;"
