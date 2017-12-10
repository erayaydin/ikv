<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="{{ asset('favicon.ico') }}">

    <title>İstanbul Kıyamet Vakti | Maden Haritası</title>

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111005676-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '{{ config('services.analytics.code') }}');
    </script>

    <!-- Bootstrap -->
    <link href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Stylesheet -->
    <link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">

    <!-- Plugin Stylesheets -->
    @yield('plugin.css')

    <!-- Page Stylesheets -->
    @yield('page.css')
</head>
<body>

<main role="main" class="container">

    @yield('container')

</main><!-- /.container -->

<div class="copyright">
    Copyright &copy; 2017 &middot; <b><a href="http://erayaydin.github.io">Bagatur</a></b> (Beyazköşk) &middot; <b>Raunn</b>'a ve Tüm Neferlere Selam Olsun
</div>

<div class="bug">
    <a href="mailto:eray@labkod.com?Subject=IKV%20Maden%20Haritası%20Hata%20Bildirimi">Hata Bildir !</a>
</div>

<div class="version">
    Sürüm: <b>v0.1.2</b>
</div>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="../../../../assets/js/vendor/jquery.min.js"><\/script>')</script>
<!-- Popper -->
<script src="{{ asset('assets/vendor/popper/umd/popper.min.js') }}"></script>
<!-- Bootstrap -->
<script src="{{ asset('assets/vendor/bootstrap/js/bootstrap.min.js') }}"></script>

<!-- Plugin Scripts -->
@yield('plugin.js')

<!-- Page Scripts -->
@yield('page.js')
</body>
</html>