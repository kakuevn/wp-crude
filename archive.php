<?php
/**
 * The template for displaying archive pages
 */

get_header(); ?>

<div>
	<div>
	<?php if ( have_posts() ) : ?>

	<?php endif;
		if ( have_posts() ) :
			/* Start the Loop */
			while ( have_posts() ) : the_post();

			endwhile;

		else :

		endif;

		?>

	</div>
	<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
