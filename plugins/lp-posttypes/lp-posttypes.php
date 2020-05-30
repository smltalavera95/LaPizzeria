<?php

/*
  Plugin Name: La Pizzeria Specialities
  Plugin URI:
  Description: Add post types to website
  Version: 1.0
  Author: Talavera S
  Author URI: https://twitter.com/smltalavera95
  License: GPL2
  License URI: https://www.gnu.org/licenses/gpl-2.0.html
  Text Domain: lapizzeria
*/

add_action( 'init', 'lapizzeria_specialties' );

function lapizzeria_specialties() {
	$labels = array(
		'name'               => _x( 'Specialties', 'lapizzeria' ),
		'singular_name'      => _x( 'Specialty', 'post type singular name', 'lapizzeria' ),
		'menu_name'          => _x( 'Specialties', 'admin menu', 'lapizzeria' ),
		'name_admin_bar'     => _x( 'Specialties', 'add new on admin bar', 'lapizzeria' ),
		'add_new'            => _x( 'Add New', 'book', 'lapizzeria' ),
		'add_new_item'       => __( 'Add Specialty', 'lapizzeria' ),
		'new_item'           => __( 'New Specialty', 'lapizzeria' ),
		'edit_item'          => __( 'Edit Specialty', 'lapizzeria' ),
		'view_item'          => __( 'View Specialty', 'lapizzeria' ),
		'all_items'          => __( 'All Specialties', 'lapizzeria' ),
		'search_items'       => __( 'Search Specialties', 'lapizzeria' ),
		'parent_item_colon'  => __( 'Specialty Padre', 'lapizzeria' ),
		'not_found'          => __( 'Not found specialties', 'lapizzeria' ),
		'not_found_in_trash' => __( 'Not found specialties', 'lapizzeria' )
	);

	$args = array(
		'labels'             => $labels,
    'description'        => __( 'Description.', 'lapizzeria' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'menu-pizzeria' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 6,
		'supports'           => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'         =>  array('category-menu')
	);

	register_post_type( 'specialties', $args );
}


/** Register a Taxonomy*/

function lapizzeria_menu_taxonomy() {

	$labels = array(
		'name'              => _x( 'Category Menu', 'taxonomy general name', 'lapizzeria' ),
		'singular_name'     => _x( 'Category Menu', 'taxonomy singular name', 'lapizzeria' ),
		'search_items'      => __( 'Search Category Menu', 'lapizzeria' ),
		'all_items'         => __( 'All Categorias Menu', 'lapizzeria' ),
		'parent_item'       => __( 'Category Menu Parent', 'lapizzeria' ),
		'parent_item_colon' => __( 'Category Menu:', 'lapizzeria' ),
		'edit_item'         => __( 'Edit Category Menu', 'lapizzeria' ),
		'update_item'       => __( 'Update Category Menu', 'lapizzeria' ),
		'add_new_item'      => __( 'Add Category Menu', 'lapizzeria' ),
		'new_item_name'     => __( 'New Category Menu ', 'lapizzeria' ),
		'menu_name'         => __( 'Category Menu', 'lapizzeria' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'category-menu' ),
		'show_in_rest'	    => true,
		'rest-base'	    => 'category-menu'
	);

	register_taxonomy( 'category-menu', array( 'specialties' ), $args );
}

add_action( 'init', 'lapizzeria_menu_taxonomy', 0 );
