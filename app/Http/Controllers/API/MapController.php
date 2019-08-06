<?php

namespace App\Http\Controllers\API;

use App\ItemLocation;
use App\Map;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MapController extends Controller
{
    public function index() {
        $maps = Map::orderBy('order', 'ASC')->where('status', true)->get(['code', 'name', 'image']);

        return $maps;
    }

    public function show(Map $map) {
        $result = [];

        $result['map'] = [
            'name' => $map->name,
            'code' => $map->code,
            'description' => $map->description,
            'image' => $map->image,
        ];

        $result['items'] = [];

        foreach($map->items()->orderBy('order', 'ASC')->where('status', true)->get() as $item) {
            $locations = [];
            foreach(ItemLocation::where('item_id', $item->id)->where('map_id', $map->id)->get() as $location){
                $locations[] = [
                    'x' => $location->x,
                    'y' => $location->y
                ];
            }
            $result['items'][$item->code] = [
                'name'  => $item->name,
                'order' => $item->order,
                'image' => $item->image,
                'job'   => $item->job,
                'locations' => $locations
            ];
        }

        return $result;
    }
}
