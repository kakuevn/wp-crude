<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header(); ?>

<div>
	<h1><?php _e( 'Oops! That page can&rsquo;t be found.', 'crude' ); ?></h1>
	<p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'crude' ); ?></p>

	<?php get_search_form(); ?>
</div><!-- .wrap -->

<?php get_footer(); ?>
