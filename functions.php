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

add_theme_support( 'post-thumbnails', array( 'post', 'weddings' ) );


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


/*--- Custom Post Types ---*/
function custom_post_type($names, $name, $label) {

// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => _x( $names, 'Post Type General Name', 'Nika Zhorzholiani' ),
        'singular_name'       => _x( $name, 'Post Type Singular Name', 'Nika Zhorzholiani' ),
        'menu_name'           => __( $names, 'Nika Zhorzholiani' ),
        'parent_item_colon'   => __( 'Parent  ' . $name, 'Nika Zhorzholiani' ),
        'all_items'           => __( 'All  ' . $names, 'Nika Zhorzholiani' ),
        'view_item'           => __( 'View  ' . $name, 'Nika Zhorzholiani' ),
        'add_new_item'        => __( 'Add New ' . $name, 'Nika Zhorzholiani' ),
        'add_new'             => __( 'Add New', 'Nika Zhorzholiani' ),
        'edit_item'           => __( 'Edit ' . $name, 'Nika Zhorzholiani' ),
        'update_item'         => __( 'Update ' . $name, 'Nika Zhorzholiani' ),
        'search_items'        => __( 'Search ' . $name, 'Nika Zhorzholiani' ),
        'not_found'           => __( 'Not Found', 'Nika Zhorzholiani' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'Nika Zhorzholiani' ),
    );

// Set other options for Custom Post Type

    $args = array(
        'label'               => __( $label, 'Nika Zhorzholiani' ),
        'Date'         => __( $name, 'Nika Zhorzholiani' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => array( 'title', 'editor', 'thumbnail' ),
        // You can associate this CPT with a taxonomy or custom taxonomy.
        /* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-camera-alt',
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'page',
    );

    // Registering your Custom Post Type
    register_post_type( $label, $args );

}

add_action( 'init', function() {return custom_post_type('Weddings', 'Wedding', 'weddings'); }, 0 );


// Date meta-box

function add_ev_date_meta_box() {
    $post_types = array ( 'weddings' );
    foreach ($post_types as $post_type) {
        add_meta_box(
            'ev-date',
            'Date',
            'ev_date_html',
            $post_type,
            'side'
        );
    }
}
add_action('add_meta_boxes', 'add_ev_date_meta_box');

function  ev_date_html( $post ) {
    echo '<label for="ev-date">Date</label> ';
    echo '<input id="ev-date" name="ev-date" value="';
    echo esc_attr( get_post_meta( get_the_ID(), 'ev-date', true ) );
    echo '">';
}

function save_ev_date_meta_box( $post_id ) {
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( $parent_id = wp_is_post_revision( $post_id ) ) {
        $post_id = $parent_id;
    }
    update_post_meta( $post_id, 'ev-date', sanitize_text_field( $_POST['ev-date'] ) );
}
add_action( 'save_post', 'save_ev_date_meta_box' );

// END Date metabox

// Location meta-box

function add_ev_location_meta_box() {
    $post_types = array ( 'weddings' );
    foreach ($post_types as $post_type) {
        add_meta_box(
            'ev-location',
            'Location',
            'ev_location_html',
            $post_type,
            'side'
        );
    }
}
add_action('add_meta_boxes', 'add_ev_location_meta_box');

function  ev_location_html( $post ) {
    echo '<label for="ev-location">Location</label> ';
    echo '<input type="text" id="ev-location" name="ev-location" value="';
    echo esc_attr( get_post_meta( get_the_ID(), 'ev-location', true ) );
    echo '">';
}

function save_ev_location_meta_box( $post_id ) {
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( $parent_id = wp_is_post_revision( $post_id ) ) {
        $post_id = $parent_id;
    }
    update_post_meta( $post_id, 'ev-location', sanitize_text_field( $_POST['ev-location'] ) );
}
add_action( 'save_post', 'save_ev_location_meta_box' );

// END Location metabox
