<?php /* Template Name: Custom Page */ ?>

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

<ul class="social social-desktop custom-page">
    <li><a href="https://www.facebook.com/zhorzholianni1" target="_blank"><img src="<?php bloginfo('template_directory'); ?>/img/facebook.png" alt="Facebook"></a></li>
    <li><a href="https://www.instagram.com/nikazhorzholiani1/" target="_blank"><img src="<?php bloginfo('template_directory'); ?>/img/instagram.png" alt="Facebook"></a></li>
</ul>
<?php get_footer(); ?>
