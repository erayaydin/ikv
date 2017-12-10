@extends('layout.master')

@section('container')
    <div class="gather">
        <div class="gather-inv">
            <p>Maden Seçiniz</p>
            <div id="inventory" class="gather-item-list"></div>
        </div>
        <div class="gather-screen">
            <div class="gather-tabs">
                <ul>
                    <li class="active"><a href="#" data-target="eminonu" data-image="{{ asset('assets/modules/gather/maps/eminonu.png') }}">Eminönü</a></li>
                    <li><a href="#" data-target="antrepo" data-image="{{ asset('assets/modules/gather/maps/antrepo.png') }}">Antrepo</a></li>
                    <li><a href="#" data-target="labirent" data-image="{{ asset('assets/modules/gather/maps/labirent.png') }}">Labirent</a></li>
                    <li><a href="#" data-target="meteor" data-image="{{ asset('assets/modules/gather/maps/meteor.png') }}">Meteor Bölgesi</a></li>
                    <li><a href="#" data-target="ada" data-image="{{ asset('assets/modules/gather/maps/ada.png') }}">Sivri Ada</a></li>
                    <li><a href="#" data-target="yeralti" data-image="{{ asset('assets/modules/gather/maps/yeralti.png') }}">Yeraltı</a></li>
                    <li><a href="#" data-target="hol" data-image="{{ asset('assets/modules/gather/maps/hol.png') }}">Hol</a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="gather-map">
                <p>Eminönü</p>
                <div class="gather-map-buttons">
                    <button type="button" class="map-left"></button>
                    <button type="button" class="map-right"></button>
                </div>
                <div class="clearfix"></div>
                <div id="map" class="gather-map-screen">
                    <img src="{{ asset('assets/modules/gather/ui/map-placeholder.png') }}" alt="Eminönü" />
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