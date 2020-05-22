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

<div class="section container with-sidebar">
  <main class="primary-content">
    <?php while(have_posts()): the_post(); ?>
      <article class="blog-post">
        <a href="<?php the_permalink();?>">
          <?php the_post_thumbnail( 'specialty');?>
        </a>

        <?php  get_template_part('template-parts/post', 'information');?>

        <div class="post-content">
          <?php the_excerpt();?>
          <a href="<?php the_permalink();?>" class="btn btn-primary">Read more</a>
        </div>

      </article>

    <?php endwhile;?>
    <div class="pagination">
      <?php echo next_posts_link('Older');?>
      <?php echo previous_posts_link('Newer');?>
    </div>
  </main>

  <?php get_sidebar();?>


</div>


<?php get_footer();?>
