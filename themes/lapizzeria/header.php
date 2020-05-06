<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=devices-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--Calling the style css-->
    <?php wp_head(); ?>
  </head>
  <body>
    <header class="site-header">
      <div class="container">
        <div class="logo">
          <a href="<?php echo esc_url(home_url('/'));?>">
            <img src="<?php echo get_template_directory_uri() ?>/img/logo.svg" alt="La Pizzeria's Logo">
          </a>
        </div>

        <div class="information-header">
          <div class="social-media">
            <?php
              $args = array(
                'theme_location' => 'socialMedia-menu',
                'container' => 'nav',
                'container_class' => 'socials',
                'link_before' => '<span class="sr-text">',//Para agregar una etiqueta antes del texto
                'link_after' => '</span>'
              );
              wp_nav_menu($args);
            ?>
          </div><!--SM end-->

          <div class="direction">
            <p>819 Bay Avenue Mt. CA 95046</p>
            <p>Phone: 1 456-5487-453</p>
          </div><!--Direction End-->

        </div><!--Info Header end-->
      </div><!--End Container-->
    </header>
    <div class="main-menu">
      <div class="container">
        <?php
          $args =array(
            'theme_location' => 'header-menu',//Llama al menu creado en functions
            'container' => 'nav',//etiqueta que rodeara a los elementos
            'container_class' => 'site-menu',//clase de la etiqueta
            'container_id' => 'menu'//id de la etiqueta
          );
          wp_nav_menu($args);
         ?>
      </div><!--Ending Container-->
    </div><!--Ending Main menu-->
