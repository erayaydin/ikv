<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    public $timestamps = false;

    public function maps() {
        return $this->belongsToMany('App\Map');
    }
}
