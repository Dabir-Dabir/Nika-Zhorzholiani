<?php get_header();
?>
    <main>

        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
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
            ?>

            <section class="single-event events-container">
                <h5 class="single-event__date"><?php echo get_post_meta(get_the_ID(), 'ev-date', TRUE); ?></h5>
                <h1 class="single-event__title"><?php the_title(); ?></h1>
                <h5 class="single-event__location"><?php echo get_post_meta(get_the_ID(), 'ev-location', TRUE); ?></h5>

                <div class="single-event__switch-box">
                    <button class="single-event__switch single-event__switch--active" id="single-event__gallery">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             id="SvgjsSvg1000" version="1.1" width="16"
                             height="16">
                            <defs id="SvgjsDefs1001"/>
                            <path id="SvgjsPath1007" d="M1384 308L1384 302L1400 302L1400 308Z " fill="#343434"
                                  transform="matrix(1,0,0,1,-1384,-302)"/>
                            <path id="SvgjsPath1008" d="M1384 318L1384 312L1400 312L1400 318Z " fill="#343434"
                                  transform="matrix(1,0,0,1,-1384,-302)"/>
                        </svg>
                    </button>
                    <button class="single-event__switch" id="single-event__images">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             id="SvgjsSvg1000" version="1.1" width="16"
                             height="16">
                            <defs id="SvgjsDefs1001"/>
                            <path id="SvgjsPath1007" d="M1353 308L1353 302L1359 302L1359 308Z " fill="#343434"
                                  transform="matrix(1,0,0,1,-1353,-302)"/>
                            <path id="SvgjsPath1008" d="M1363 308L1363 302L1369 302L1369 308Z " fill="#343434"
                                  transform="matrix(1,0,0,1,-1353,-302)"/>
                            <path id="SvgjsPath1009" d="M1363 318L1363 312L1369 312L1369 318Z " fill="#343434"
                                  transform="matrix(1,0,0,1,-1353,-302)"/>
                            <path id="SvgjsPath1010" d="M1353 318L1353 312L1359 312L1359 318Z " fill="#343434"
                                  transform="matrix(1,0,0,1,-1353,-302)"/>
                        </svg>
                    </button>
                </div>

                <div class="single-event__gallery single-event--visible">
                    <?php
                    foreach ($attachments as $attachment) :
                        $image_alt = get_post_meta($attachment->ID, '_wp_attachment_image_alt', true);
                        $image_title = $attachment->post_title;
                        $hashtags = $attachment->post_excerpt;
                        $big_image = wp_get_attachment_image_src($attachment->ID, 'full');
                        ?>
                        <img src='' data-src="<?php echo $big_image[0]; ?>" class="img single-event__gallery-image"/>
                    <?php
                    endforeach;
                    ?>
                </div>

                <div class="single-event__images">
                    <?php
                    foreach ($attachments as $attachment) :
                        $image_alt = get_post_meta($attachment->ID, '_wp_attachment_image_alt', true);
                        $image_title = $attachment->post_title;
                        $hashtags = $attachment->post_excerpt;
                        $medium_image = wp_get_attachment_image_src($attachment->ID, 'large');
                        $big_image = wp_get_attachment_image_src($attachment->ID, 'full');

                        ?>

                        <div class="single-event__image">
                            <img src='' data-src="<?php echo $medium_image[0]; ?>"
                                 data-medium-image="<?php echo $medium_image[0]; ?>"
                                 data-big-image="<?php echo $big_image[0]; ?>" class="img"/>
                            <span class="img-ov"></span>
                        </div>
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

    <div id="lightbox" class="lightbox">
        <button id="close-lightbox">
            <svg id="Close_Button" data-name="Close Button" xmlns="http://www.w3.org/2000/svg" width="33.901"
                 height="33.901" viewBox="0 0 33.901 33.901">
                <path id="Path_1" data-name="Path 1" d="M4.187,1.5,1.5,4.187,32.4,29.714,29.714,32.4Z"
                      fill="rgba(255,255,255,0.9)" stroke="#565656" stroke-linejoin="round" stroke-miterlimit="10"
                      stroke-width="3"/>
                <path id="Path_2" data-name="Path 2" d="M32.4,4.187,29.714,1.5,4.187,32.4,1.5,29.714Z" fill="none"
                      stroke="#565656" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
            </svg>
        </button>
        <button id="prev-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.311" height="70" viewBox="0 0 30.311 70">
                <path id="Left_Arrow" data-name="Left Arrow"
                      d="M.231,28.89,32.357.947a4.055,4.055,0,0,1,5.21,0L69.692,28.89a.811.811,0,0,1-.553,1.421H65.9a3.667,3.667,0,0,1-1.815-.474l-25.5-13.419a8.03,8.03,0,0,0-7.341,0L5.282,29.837a3.667,3.667,0,0,1-1.815.474H.783A.827.827,0,0,1,.231,28.89Z"
                      transform="translate(0 69.97) rotate(-90)" fill="#565656"/>
            </svg>
        </button>
        <button id="next-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.311" height="70" viewBox="0 0 30.311 70">
                <path id="Right_Arrow" data-name="Right Arrow"
                      d="M.231,28.89,32.357.947a4.055,4.055,0,0,1,5.21,0L69.692,28.89a.811.811,0,0,1-.553,1.421H65.9a3.667,3.667,0,0,1-1.815-.474l-25.5-13.419a8.03,8.03,0,0,0-7.341,0L5.282,29.837a3.667,3.667,0,0,1-1.815.474H.783A.827.827,0,0,1,.231,28.89Z"
                      transform="translate(30.311 0.03) rotate(90)" fill="#565656"/>
            </svg>
        </button>
        <div class="image-wrap">
            <img id="lightbox-image" src="" alt="">
        </div>
    </div>

    <button id="back-to-top" class="back-to-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="58.195" height="25.199" viewBox="0 0 58.195 25.199">
            <path id="Path_14" data-name="Path 14" d="M.187,24.018,26.895.787a3.371,3.371,0,0,1,4.331,0l26.708,23.23a.674.674,0,0,1-.459,1.181h-2.69a3.048,3.048,0,0,1-1.509-.394l-21.2-11.156a6.675,6.675,0,0,0-6.1,0L4.386,24.805a3.048,3.048,0,0,1-1.509.394H.646A.688.688,0,0,1,.187,24.018Z" transform="translate(0.03)" fill="#565656"/>
        </svg>
    </button>

<?php get_footer(); ?>