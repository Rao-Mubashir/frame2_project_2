<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AboutContentController;
use App\Http\Controllers\ServiceController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public settings endpoints
Route::get('/about/content', [AboutContentController::class, 'publicIndex']);
Route::get('/contact/settings', [ContactSettingsController::class, 'showPublic']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/profile/update', [ProfileController::class, 'updateProfile']);
    Route::post('/profile/update-password', [ProfileController::class, 'updatePassword']);

    // Admin routes
    Route::prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard']);
        Route::get('/users', [AdminController::class, 'users']);
        Route::post('/users', [AdminController::class, 'createUser']);
        Route::put('/users/{userId}/role', [AdminController::class, 'updateUserRole']);
        Route::post('/users/{userId}/reset-password', [AdminController::class, 'resetUserPassword']);
        Route::delete('/users/{userId}', [AdminController::class, 'deleteUser']);

        // Settings management
        Route::get('/about/content', [AboutContentController::class, 'adminIndex']);
        Route::put('/about/content', [AboutContentController::class, 'update']);
        Route::get('/contact/settings', [ContactSettingsController::class, 'show']);
        Route::put('/contact/settings', [ContactSettingsController::class, 'update']);

        // Services management
        Route::apiResource('/services', ServiceController::class);
    });
});
