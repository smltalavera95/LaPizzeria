<?php

/*
  Plugin Name: La Pizzeria Gutenberg Blocks
  Plugin URI:
  Description: Add Gutenberg native blocks
  Version: 1.0
  Author: Talavera S
  Author URI: https://twitter.com/smltalavera95
  License: GPL2
  License URI: https://www.gnu.org/licenses/gpl-2.0.html

*/
if (!defined('ABSPATH')) exit;

//Custom categories
function lp_custom_categories($categories, $post){
  return array_merge(
    $categories,
    array(
      array(
        'slug' =>'lapizzeria',
        'title' => 'La Pizzeria',
        'icon' => 'store'
      )
    )
  );

}
add_filter('block_categories', 'lp_custom_categories', 10, 2);//Priority 10 (the most) and variables 2

//Register Blocks, scripts and CSS
function lp_register_blocks(){

  //if gutenberg not exists
  if(!function_exists('register_block_type')){
    return;
  }

  //Register the blocks in editor
  wp_register_script(
    'lp-editor-script', //unique name
    plugins_url('build/index.js', __FILE__), //URL file with blocks
    array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),//dependencies
    filemtime(plugin_dir_path(__FILE__) . 'build/index.js')//version

  );

  wp_register_style(
    'lp-editor-style', //unique name
    plugins_url('build/editor.css', __FILE__), //URL file with blocks
    array('wp-edit-blocks'),//dependencies
    filemtime(plugin_dir_path(__FILE__) . 'build/editor.css')//version
  );

  //Styles backend and front end
  wp_register_style(
    'lp-frontend-style', //unique name
    plugins_url('build/style.css', __FILE__), //URL file with blocks
    array(),//dependencies
    filemtime(plugin_dir_path(__FILE__) . 'build/style.css')//version
  );

  //Bocks arrays
  $blocks =[
    'lp/boxes' //identificador
  ];

  //Run the bloks add scripts and Styles
  foreach($blocks as $block){
    register_block_type($block, array(
      'editor_script' => 'lp-editor-script',//The script that we defined before
      'editor_style' => 'lp-editor-style',//The style that we defined before
      'style' => 'lp-frontend-style'//The style frontend that we defined before
    ));
  }

}
add_action('init', 'lp_register_blocks');
