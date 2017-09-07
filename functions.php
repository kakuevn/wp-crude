<?php
/**
 * CRUDE functions and definitions
 */

function crude_setup() {
	add_theme_support( 'automatic-feed-links' );

	add_theme_support( 'title-tag' );

	add_theme_support( 'post-thumbnails' );

	// Register nav menus
	register_nav_menus( array(
		'main-nav'    => __( 'Main Nav', 'crude' ),
		'footer-nav'	=> __( 'Footer Nav', 'crude' )
	) );

	// add_theme_support( 'html5', array(
		// Choose what your theme needs to support
	// ) );


	// add_theme_support( 'post-formats', array(
	//		Choose what your theme needs to support
	// ) );

	// Add theme support for Custom Logo.
	add_theme_support( 'custom-logo', array(
		'flex-height' => true,
		'flex-width'  => true,
	) );
}
add_action( 'after_setup_theme', 'crude_setup' );

/**
 * Register widget area.
 */
function crude_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar Widgets', 'crude' ),
		'id'            => 'sidebar-widgets',
		'description'   => __( 'Add widgets here to appear in your sidebar.', 'crude' ),
		'before_widget' => '<section class="">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Widgets', 'twentyseventeen' ),
		'id'            => 'footer-widgets',
		'description'   => __( 'Add widgets here to appear in your footer.', 'crude' ),
		'before_widget' => '<section class="">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'crude_widgets_init' );

/**
 * Read more link
 */
function crude_excerpt_more( $link ) {
	return '...';
}
add_filter( 'excerpt_more', 'crude_excerpt_more' );

/**
 * Enqueue scripts and styles.
 */
function crude_scripts() {

	//Load main stylesheets
	//---------------------------------------------------
	wp_enqueue_style( 'css', get_template_directory_uri() . '/assets/bundles/main.min.css' ); //delete this once finished dev
	//---------------------------------------------------

	wp_enqueue_style( 'crude-style', get_stylesheet_uri() );

	//Load scripts
	
	//---------------------------------------------------
	wp_enqueue_script( 'js', get_template_directory_uri() . '/assets/bundles/main.min.js', true ); //delete this once finished dev
	//---------------------------------------------------

}
add_action( 'wp_enqueue_scripts', 'crude_scripts' );
