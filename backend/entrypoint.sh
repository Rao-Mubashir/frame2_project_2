#!/bin/bash

# Ensure SQLite file exists if using sqlite
if [ "$DB_CONNECTION" = "sqlite" ] || [ -z "$DB_CONNECTION" ]; then
    echo "Using SQLite. Ensuring database file exists..."
    mkdir -p database
    touch database/database.sqlite
    chown -R www-data:www-data database
fi

# Clear old caches just in case
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear

# Cache configuration
echo "Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations and seeders (Force fresh to ensure categories exist)
echo "Wiping and re-seeding database..."
php artisan migrate:fresh --force --seed

echo "Starting server..."
# Start PHP-FPM (in background) and Nginx
php-fpm -D && nginx -g "daemon off;"
