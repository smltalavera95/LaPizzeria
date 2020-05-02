<?php

/** CSS y JS **/
function lp_styles(){

  //Normalize
  wp_enqueue_style('normalize', 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css', array(), '8.0.1');

  //Fonts
  wp_enqueue_style('googleFonts', 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700;900&display=swap',  array(), '1.0.0');

  //Adding CSS Stylesheets
  wp_enqueue_style('style' , get_stylesheet_uri(), array('normalize'), '1.0.0');

  //Adding CSS Slick Nav
  wp_enqueue_style('slickNav', 'https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css', array('normalize'), '1.0.10');

  //Scripts
  //SlickNav
  wp_enqueue_script('slickNav', 'https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js', array('jquery'), '1.0.10', true);//El true es para cargar el script en el footer

  //Custom Scripts
  wp_enqueue_script('scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0', true);


}
add_action('wp_enqueue_scripts', 'lp_styles');

/*Agregando el menu*/
function lp_menus(){
  register_nav_menus(array(
    /*header-menu es para el backend
    Header Menu es el nombre que aparece en la parte visual del admin*/
    'header-menu' => 'Header Menu'
  ) );
}
add_action('init', 'lp_menus');
