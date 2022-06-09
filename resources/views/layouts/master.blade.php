<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Shop - @yield('title')</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <!-- Bootstrap icons-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}" />
</head>

<body>
    <!-- Navigation-->
    @include('layouts.partials.navbar')
    <!-- Header-->
    @include('layouts.partials.header')
    <!-- Section content -->
    @yield('content')
    <!-- Footer-->
    @include('layouts.partials.footer')

    <!-- Bootstrap core JS-->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/scripts.js') }}"></script>
</body> 

</html>
