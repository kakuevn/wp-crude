<?php
/**
 * The template for displaying search results pages
 */

get_header(); ?>

<div>

	<div>
		<?php if ( have_posts() ) : ?>

		<?php else : ?>
			<h1><?php _e( 'Nothing Found', 'crude' ); ?></h1>
		<?php endif; ?>
	</div>

	<div >

		<?php
		if ( have_posts() ) :
			/* Start the Loop */
			while ( have_posts() ) : the_post();

			endwhile; // End of the loop.

		else : ?>

			<p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'crude' ); ?></p>

		<?php
		endif;
		?>

	</div>
	<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
