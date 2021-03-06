<?php


function lp_setup(){
  //Enable featured image
  add_theme_support('post-thumbnails');

  //Titles for SEO
  add_theme_support('title-tag');
  //Enable support for default gutunberg styles
  add_theme_support( 'wp-block-styles' );
  add_theme_support('editor-styles');

  //Wide support
  add_theme_support('align-wide');
  //Custom Colors
  add_theme_support('editor-color-palette', array(
    array(
      'name' => 'Red',
      'slug' =>'red',
      'color' => '#a61206'
    ),
    array(
      'name' => 'Orange',
      'slug' => 'orange',
      'color' => '#F19F30'
    ),
    array(
      'name' => 'Green',
      'slug' =>'green',
      'color' => '#127427'
    ),
    array(
      'name' => 'White',
      'slug' =>'white',
      'color' => '#ffffff'
    ),
    array(
      'name' => 'Black',
      'slug' =>'black',
      'color' => '#000000'
    )

  ));

  //Disable the hexadecimal Color
  add_theme_support( 'disable-custom-colors' );

  //Sizes of images
  add_image_size( 'us', 437, 291, true );
  add_image_size( 'specialty', 768, 515, true );
  add_image_size( 'specialty_portrait', 435, 526, true );
}
add_action('after_setup_theme', 'lp_setup');

/** CSS y JS **/
function lp_styles(){

  //Normalize
  wp_enqueue_style('normalize', 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css', array(), '8.0.1');

  //Fonts
  wp_enqueue_style('googleFonts', 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700;900&display=swap',  array(), '1.0.0');

  //Adding CSS Slick Nav
  wp_enqueue_style('slickNav', 'https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css', array('normalize'), '1.0.10');

  //Adding CSS Stylesheets
  wp_enqueue_style('style' , get_stylesheet_uri(), array('normalize'), '1.0.0');



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
    'header-menu' => 'Header Menu',
    'socialMedia-menu' => 'Social Media Menu'
  ) );
}
add_action('init', 'lp_menus');


/*Widgets*/
function lp_widgets(){
  register_sidebar(array(
     'name' => 'Blog Sidebar',
     'id' => 'blog_sidebar',
     'before_widget' => '<div class="widget">',
     'after_widget' => '</div>',
     'before_title' => '<h3>',
     'after_title' => '</h3>'
  ) );
}
add_action('widgets_init', 'lp_widgets');


/* Pagination Buttons */
function lp_pagination_buttons(){
  return 'class="btn btn-secondary"';
}
add_filter('next_posts_link_attributes', 'lp_pagination_buttons');
add_filter('previous_posts_link_attributes', 'lp_pagination_buttons');
