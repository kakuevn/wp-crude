<?php
/**
 * The template for displaying all single posts
 */

get_header(); ?>

<div>
	<div >
		<main>

			<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post();
				endwhile; // End of the loop.
			?>

		</main>
	</div>
	<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
