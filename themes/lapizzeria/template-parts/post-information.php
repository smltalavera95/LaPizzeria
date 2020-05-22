<header class="post-information">
  <div class="date">
    <time>
      <?php echo the_time('d');?>
      <span class="month"><?php echo the_time('M');?></span>
    </time>
  </div>

<?php if(is_home()):?>
    <div class="post-title">
      <a href="<?php the_permalink();?>">
        <h2><?php the_title();?></h2>
      </a>
    </div>
  <?php endif;
?>
</header>
<p class="author">
  Written by:
  <span><?php the_author();?></span>
</p>
