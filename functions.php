<?php

// register menus
function register_new_menus() {
    register_nav_menu('desktop-menu',__( 'Desktop Menu' ));
    register_nav_menu('mobile-menu',__( 'Mobile Menu' ));
}
add_action( 'init', 'register_new_menus' );


