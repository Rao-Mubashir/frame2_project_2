#!/bin/bash

# Ensure SQLite file exists if using sqlite
if [ "$DB_CONNECTION" = "sqlite" ] || [ -z "$DB_CONNECTION" ]; then
    echo "Using SQLite. Ensuring database file exists..."
    mkdir -p database
    touch database/database.sqlite
    chown -R www-data:www-data database
fi

# Ensure fresh database on startup
echo "Wiping and re-seeding database..."
php artisan migrate:fresh --force --seed

# Cache configuration AFTER database is ready
echo "Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan cache:clear # Now safe since tables exist

echo "Starting server..."
# Start PHP-FPM (in background) and Nginx
php-fpm -D && nginx -g "daemon off;"
