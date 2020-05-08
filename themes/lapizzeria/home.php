<?php get_header();?>

<?php
  $blog_page = get_option('page_for_posts');
  $image_id = get_post_thumbnail_id( $blog_page );
  $image_src = wp_get_attachment_image_src($image_id,'full')[0];
?>

<div class="hero" style="background-image:url('<?php echo $image_src ?>');">
  <div class="hero-content">
    <h1><?php echo get_the_title($blog_page);?></h1>
  </div>
</div>

<div class="section container">
  <main class="primary-content">
    <?php while(have_posts()): the_post(); ?>
      <h1><?php the_title();?></h1>
    <?php endwhile;?>
  </main>
</div>


<?php get_footer();?>
