<?php

use Illuminate\Http\Request;

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

Route::bind('map', function($code) {
    return \App\Map::where('code', $code)->first();
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'API'], function(){
    Route::get('maps', ['as' => 'api.map.index', 'uses' => 'MapController@index']);
    Route::get('map/{map}', ['as' => 'api.map.show', 'uses' => "MapController@show"]);
});