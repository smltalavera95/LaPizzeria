<div class="hero" style="background-image:url('<?php echo get_the_post_thumbnail_url()?>');">
  <div class="hero-content">
    <h1><?php the_title();?></h1>
  </div>
</div>

<div class="section container">

  <main class="primary-content">

    <?php
      if(is_single()):
        get_template_part('template-parts/post', 'information');
      endif;
    ?>
    <?php the_content();?>
  </main>

</div>
