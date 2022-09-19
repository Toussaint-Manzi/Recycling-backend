<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Auth\NewPasswordController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RecyclableMaterialController;
use App\Http\Controllers\Api\StoreController;
use App\Http\Controllers\Api\UserMaterialController;
use App\Http\Controllers\Api\RequestStoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(
    function () {

        //category
        Route::get('categories', [CategoryController::class, 'GetCategories']);
        Route::get('category/show/{id}', [CategoryController::class, 'edit'])->middleware('admin');
        Route::put('category/update/{id}', [CategoryController::class, 'update'])->middleware('admin');
        Route::post('category/create', [CategoryController::class, 'create'])->middleware('admin');
        Route::delete('category/delete/{id}', [CategoryController::class, 'delete'])->middleware('admin');


        //UserMaterials
        Route::get('materials', [RecyclableMaterialController::class, 'getMaterials']);
        Route::get('mymaterials', [RecyclableMaterialController::class, 'myMaterials'])->middleware('manager');
        Route::get('manufacture/choice/materials', [RecyclableMaterialController::class, 'manufactureChoice']);
        Route::get('material/show/{id}', [RecyclableMaterialController::class, 'show']);
        Route::put('material/update/{id}', [RecyclableMaterialController::class, 'update'])->middleware('admin');
        Route::post('material/create/{categoryId}', [RecyclableMaterialController::class, 'create'])->middleware('admin');
        Route::delete('material/delete/{id}', [RecyclableMaterialController::class, 'delete'])->middleware('admin');

        Route::post('choose/material/{id}', [UserMaterialController::class, 'chooseMaterialYouCollect']);
        Route::put('change/material/{id}', [UserMaterialController::class, 'modifyMaterial']);
        Route::post('forget/material/{id}', [UserMaterialController::class, 'removeMaterial']);

        //user
        Route::get('users', [UserController::class, 'getUsers'])->middleware('admin');
        Route::get('user/show/{id}', [UserController::class, 'show'])->middleware('admin');
        Route::get('user/search/{location}', [UserController::class, 'searchCollector']);
        Route::delete('user/delete/{id}', [UserController::class, 'delete'])->middleware('admin');
        Route::get('manufactures', [UserController::class, 'manufactures'])->middleware('admin');
        Route::get('collectors', [UserController::class, 'collectors'])->middleware('admin');
        Route::put('approve/{id}', [UserController::class, 'approve'])->middleware('admin');

        

        //Store
        Route::get('stores', [StoreController::class, 'getStores'])->middleware('collector');
        Route::get('store/show/{id}', [StoreController::class, 'show'])->middleware('collector');
        Route::put('store/update/{id}', [StoreController::class, 'update'])->middleware('collector');
        Route::delete('store/reset/{id}', [StoreController::class, 'resetStore'])->middleware('collector');
        Route::post('store/create/{id}', [StoreController::class, 'create'])->middleware('collector');
        Route::get('store/requests', [StoreController::class, 'storeRequests'])->middleware('collector');


        //requests
        Route::get('requests', [RequestStoreController::class, 'getRequests'])->middleware('admin');
        Route::get('myrequests', [RequestStoreController::class, 'myrequests'])->middleware('manager');
        Route::get('accepted/requests', [RequestStoreController::class, 'acceptedRequests'])->middleware('manager');

        Route::post('request/store/{id}', [RequestStoreController::class, 'requestStore'])->middleware('manager');
        Route::put('accept/request/{id}', [RequestStoreController::class, 'acceptRequest'])->middleware('collector');
        Route::put('reject/request/{id}', [RequestStoreController::class, 'rejectRequest'])->middleware('collector');
        Route::delete('cancel/request/{id}', [RequestStoreController::class, 'cancelRequest'])->middleware('manager');

        Route::post('manufacture/register', [AuthController::class, 'registerManufacture'])->middleware('admin');

        Route::post('manager/register', [AuthController::class, 'registerCollectorManager'])->middleware('admin');
        //logout
        Route::post('logout', [AuthController::class, 'logout']);
    }
);


//Authentication
Route::post('collector/register', [AuthController::class, 'registerCollector']);
Route::post('login', [AuthController::class, 'login'])->middleware('login');
Route::post('forgot', [NewPasswordController::class, 'forgotPassword']);
Route::post('reset', [NewPasswordController::class, 'reset']);
