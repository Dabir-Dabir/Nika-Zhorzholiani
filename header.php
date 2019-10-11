<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800,900" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <?php wp_head(); ?>
</head>
<body>
<header id="mobile-header" class="mobile-header">
    <div id="mobile-top" class="mobile-top">
        <a href="<?php echo get_home_url(); ?>" class="logo ajax">
            <img src="<?php bloginfo('template_directory'); ?>/img/logo-transparent.png" alt="Nika Zhorzholiani"
                 class="logo">
        </a>
        <button id="hamburger-button" class="hamburger-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="40.964" height="32.463" viewBox="0 0 40.964 32.463">
                <g id="Hamburger" transform="translate(0.5 0.5)">
                    <path id="Path_17" data-name="Path 17"
                          d="M0,23.341v1.924c0,.434,1.117.807,2.358.745l17.438-.5h.372l17.438.5c1.241.062,2.358-.31,2.358-.745V23.341c0-.434-1.117-.807-2.358-.745l-17.438.559H19.8L2.42,22.6C1.117,22.6,0,22.906,0,23.341Z"
                          transform="translate(0 -8.571)" fill="#565656" stroke="#707070" stroke-width="1"/>
                    <path id="Path_18" data-name="Path 18"
                          d="M2.172,48.2H37.73c1.179,0,2.172-.559,2.172-1.3v-.621c0-.683-.869-1.241-1.986-1.241L20.106,44.1h-.372l-17.748.931C.869,45.093,0,45.651,0,46.272v.621C0,47.637.993,48.2,2.172,48.2Z"
                          transform="translate(0 -16.733)" fill="#565656" stroke="#707070" stroke-width="1"/>
                    <path id="Path_19" data-name="Path 19"
                          d="M37.73,0H2.172C.993,0,0,.559,0,1.3v.621c0,.683.869,1.241,1.986,1.241L19.8,4.1h.372l17.81-.931c1.117-.062,1.986-.621,1.986-1.241V1.3C39.9.559,38.91,0,37.73,0Z"
                          transform="translate(0)" fill="#565656" stroke="#707070" stroke-width="1"/>
                </g>
            </svg>
        </button>
    </div>
    <div id="mobile-menu-wrap" class="mobile-menu-wrap">
        <nav class="mobile-menu menu">
            <img src="<?php bloginfo('template_directory'); ?>/img/logo-transparent.png" alt="Nika Zhorzholiani"
                 class="logo">
            <button id="close-mobile-menu" class="close-button">
                <svg id="Close_Button" data-name="Close Button" xmlns="http://www.w3.org/2000/svg" width="33.901"
                     height="33.901" viewBox="0 0 33.901 33.901">
                    <path id="Path_1" data-name="Path 1" d="M4.187,1.5,1.5,4.187,32.4,29.714,29.714,32.4Z"
                          fill="rgba(255,255,255,0.9)" stroke="#565656" stroke-linejoin="round" stroke-miterlimit="10"
                          stroke-width="3"/>
                    <path id="Path_2" data-name="Path 2" d="M32.4,4.187,29.714,1.5,4.187,32.4,1.5,29.714Z" fill="none"
                          stroke="#565656" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
                </svg>
            </button>
            <?php wp_nav_menu(
                array(
                    'theme_location' => 'mobile-menu',
                    'container' => '',
                    'menu' => 'Desktop Menu',
                    'items_wrap' => '<menu id="%1$s" class="%2$s">%3$s</menu>',
                    'container_class' => 'wp_nav_menu'
                )
            ); ?>
        </nav>
    </div>
</header>
<header id="desktop-header" class="desktop-header">
    <a href="<?php echo get_home_url(); ?>" class="logo ajax">
        <img src="<?php bloginfo('template_directory'); ?>/img/logo-transparent.png" alt="Nika Zhorzholiani"
             class="logo">
    </a>
    <nav class="desktop-menu menu">
        <?php wp_nav_menu(
            array(
                'theme_location' => 'mobile-menu',
                'container' => '',
                'menu' => 'Desktop Menu',
                'items_wrap' => '<menu id="%1$s" class="%2$s">%3$s</menu>',
                'container_class' => 'wp_nav_menu'
            )
        ); ?>
    </nav>
</header>
<div id="content">