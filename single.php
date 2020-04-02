<?php get_header();
?>
<main>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <section class="single-event events-container">
        <h1 class="single-event__title"><?php the_title(); ?></h1>
        <h5 class="single-event__description"><?php echo get_post_meta(get_the_ID(), 'ev-description', TRUE); ?></h5>

        <div class="single-event__images">
            <?php
            $gallery = get_post_gallery(get_the_ID(), false);
            $args = array(
                'post_type' => 'attachment',
                'posts_per_page' => -1,
                'post_status' => 'published',
                'order' => 'ASC',
                'orderby' => 'post__in',
                'post__in' => explode(',', $gallery['ids'])
            );
            $attachments = get_posts($args);

            foreach ($attachments as $attachment) :
                $image_alt = get_post_meta($attachment->ID, '_wp_attachment_image_alt', true);
                $image_title = $attachment->post_title;
                $hashtags = $attachment->post_excerpt;
                $medium_image = wp_get_attachment_image_src($attachment->ID, 'large');

                ?>
                <img class="img single-event__image" data-src="<?php echo $medium_image[0]; ?>"
                     width="<?php echo $medium_image[1]; ?>" height="<?php echo $medium_image[2]; ?>" alt="">
            <?php
            endforeach;
            ?>
        </div>
    </section>

<?php endwhile; endif; ?>

    <div class="loader-wrap loading">
        <img src="<?php bloginfo('template_directory'); ?>/img/Infinity.gif" alt="">
    </div>
</main>

<?php get_footer(); ?>