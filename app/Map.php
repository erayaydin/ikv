<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    public $timestamps = false;

    public function items() {
        return $this->belongsToMany('App\Item');
    }
}
