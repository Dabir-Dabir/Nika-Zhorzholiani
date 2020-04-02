<?php /* Template Name: Contact */ ?>

<?php get_header(); ?>
<main>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php
        echo get_the_content();
        ?>
    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, there is no content.' ); ?></p>
    <?php endif; ?>


    <div class="loader-wrap loading">
        <img src="<?php bloginfo('template_directory'); ?>/img/Infinity.gif" alt="">
    </div>
</main>
<?php get_footer(); ?>
