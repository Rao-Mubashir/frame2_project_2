<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

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
    });
});