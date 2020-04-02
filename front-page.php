<?php get_header(); ?>
<?php
query_posts('post_type=weddings');
$event_order_count = 0;
?>
<main>

    <section class="events-container"">

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <?php
    $event_order_count++;
    $event_style = 1;
    $event_showposts = 6;
    switch ($event_order_count % 5) {
        case 1:
            $event_style = 1;
            $event_showposts = 6;
            break;

        case 2:
            $event_style = 2;
            $event_showposts = 7;
            break;

        case 3:
            $event_style = 3;
            $event_showposts = 3;
            break;

        case 4:
            $event_style = 4;
            $event_showposts = 4;
            break;

        default:
            $event_style = 5;
            $event_showposts = 7;
            break;
    }
    ?>

    <article class="event event--style-<?= $event_style; ?>">
        <a href="<?php the_permalink(); ?>" class="event__mobile-title"><?php the_title(); ?></a>
        <a href="<?php the_permalink(); ?>" class="event__left">
            <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" class="event__thumbnail img"/>
            <div class="event__overlay"></div>
            <h3 class="event__title"><?php the_title(); ?></h3>
        </a>
        <div class="event__right">
            <?php
            $gallery = get_post_gallery(get_the_ID(), false);
            $args = array(
                'post_type' => 'attachment',
                'posts_per_page' => -1,
                'post_status' => 'published',
                'order' => 'ASC',
                'showposts' => $event_showposts,
                'orderby' => 'post__in',
                'post__in' => explode(',', $gallery['ids'])
            );
            $attachments = get_posts($args);

            foreach ($attachments as $attachment) :

                $small_image = wp_get_attachment_image_src($attachment->ID, 'medium');
                $medium_image = wp_get_attachment_image_src($attachment->ID, 'large');
                $big_image = wp_get_attachment_image_src($attachment->ID, 'full');

                ?>
                <a href="<?php the_permalink(); ?>" class="event__image-wrap">
                    <img src='' data-src="<?php echo $medium_image[0]; ?>" width="<?php echo $medium_image[1]; ?>"
                         height="<?php echo $medium_image[2]; ?>" class="img event__image"/>
                </a>
            <?php
            endforeach;
            ?>
        </div>
    </article>

<?php endwhile; endif; ?>

    </section>

    <div class="loader-wrap loading">
        <img src="<?php bloginfo('template_directory'); ?>/img/Infinity.gif" alt="">
    </div>
</main>


<?php get_footer(); ?>