<?php 

if (!function_exists('current_theme_register_script')):

function current_theme_register_script()
{           
    wp_register_script('app', get_stylesheet_directory_uri().'/assets/js/app.js', array( 'jquery' ), '2', true);
}

endif;

add_action('wp_enqueue_scripts', 'current_theme_register_script');

/**
 *
 * Enqueue theme script
 *
 */

if (!function_exists('current_theme_enqueue_script')):
    
function current_theme_enqueue_script()
{ 
    wp_enqueue_script('app');    
}
endif;

add_action('wp_enqueue_scripts', 'current_theme_enqueue_script');

// Style

if (!function_exists('current_theme_enqueue_style')):

function current_theme_enqueue_style()
{ 
    // Drop style here to enqueue them like:
    //wp_enqueue_style('jquery-ui', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.css', array(), '2');
}

endif;

add_action('wp_enqueue_scripts', 'current_theme_enqueue_style');