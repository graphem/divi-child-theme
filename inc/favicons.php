<?php
function current_theme_favicon(){
    $root = get_stylesheet_directory_uri().'/assets/favicons/';
    echo '<link rel="apple-touch-icon" sizes="180x180" href="'.$root.'apple-touch-icon.png">
    <link rel="icon" type="image/png" href="'.$root.'favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="'.$root.'favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="'.$root.'manifest.json">
    <link rel="mask-icon" href="'.$root.'safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">';
}

add_action('wp_head', 'current_theme_favicon');