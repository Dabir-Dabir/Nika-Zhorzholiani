<?php

// register menus
function register_new_menus()
{
    register_nav_menu('desktop-menu', __('Desktop Menu'));
    register_nav_menu('mobile-menu', __('Mobile Menu'));
}

add_action('init', 'register_new_menus');

add_theme_support('custom-logo', [
    'height' => 130,
    'width' => 130,
    'flex-width' => false,
    'flex-height' => false,
    'header-text' => '',
]);


/*---- Customizer ----*/

/*Customizer Code HERE*/
//add_action('customize_register', 'theme_footer_customizer');
function theme_footer_customizer($wp_customize)
{
    //adding section in wordpress customizer
    $wp_customize->add_section('footer_settings_section', array(
        'title' => 'Footer Text Section',
    ));


    //adding setting for footer text area
    $wp_customize->add_setting('text_setting', array(
        'default' => 'Default Text For Footer Section',
    ));
    $wp_customize->add_control('text_setting', array(
        'label' => 'Footer Text Here',
        'section' => 'footer_settings_section',
        'type' => 'textarea',
    ));


    //adding setting for background
    $wp_customize->add_setting('background_color', array(
        'default' => '#ffffff',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'background_color', array(
        'label' => 'Footer Color Setting',
        'section' => 'footer_settings_section',
        'settings' => 'background_color',
    )));
}