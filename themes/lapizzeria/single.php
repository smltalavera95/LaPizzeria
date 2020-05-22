<?php get_header();?>

<?php while(have_posts()):the_post();

  get_template_part('template-parts/loop', 'content');

  //coments. Enable the comments area, it will call the comments.php
  comments_template();
endwhile;?>

<?php get_footer();?>
