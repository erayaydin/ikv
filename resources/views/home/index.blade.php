@extends('layout.master')

@section('container')
    <div class="gather">
        <div class="gather-inv">
            <p>Maden Seçiniz</p>
            <div id="inventory" class="gather-item-list"></div>
        </div>
        <div class="gather-screen">
            <div class="gather-tabs">
                <ul id="tabs">
                    @foreach($maps as $map)
                        <li @if($loop->first) class="active" @endif><a href="#" data-code="{{ $map->code }}">{{ $map->name }}</a></li>
                    @endforeach
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="gather-map">
                <p id="mapName">{{ $maps->first()->name }}</p>
                <div class="gather-map-buttons">
                    <button type="button" class="map-left" id="mapLeft"></button>
                    <button type="button" class="map-right" id="mapRight"></button>
                </div>
                <div class="clearfix"></div>
                <div id="map" class="gather-map-screen">
                    <img src="{{ asset('assets/modules/gather/ui/map-placeholder.png') }}" alt="Yükleniyor..." />
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
@stop

@section('page.css')
    <link href="{{ asset('assets/modules/gather/css/gather.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/modules/gather/css/items.css') }}" rel="stylesheet" />
@stop

@section('page.js')
    <script src="{{ asset('assets/modules/gather/js/gather.js') }}"></script>
@stop