  <footer class="site-footer">
    <?php
      $args =array(
        'theme_location' => 'header-menu',//Llama al menu creado en functions
        'container' => 'nav',//etiqueta que rodeara a los elementos
        'container_class' => 'footer-nav',//clase de la etiqueta
        'container_id' => 'menu',//id de la etiqueta
        'after' => '<span class="separator"> | </span>' //Eso agrega despues de la etiqueta a que genera
      );
      wp_nav_menu($args);
     ?>

     <div class="direction">
       <p>819 Bay Avenue Mt. CA 95046</p>
       <p>Phone: 1 456-5487-453</p>
     </div><!--Direction End-->
  </footer>
    <?php wp_footer(); ?><!---Llama los elementos del footer, incluyendo los scripts-->

  </body>
</html>
