<div class="container comments">
  <?php
    $args = array(
      'class_submit' => 'btn btn-primary'//Adding class to button
    );
    comment_form($args);
  ?>

  <?php
    $args =array(
      'post_id' => $post->ID,//Call the comments of the page with the
      'status' => 'approve' //Just approved comments
    );
    $comments = get_comments($args);
    if($comments)://If have comments do this
  ?>
  <h3>Comments</h3>
  <ul class="comments-list">
    <?php
      $args2 = array(
        'per_page' => 10, //Just to show on page
        'reverse_top_level' => false //Lastest first
      );
      wp_list_comments( $args2, $comments);
    ?>
  </ul>
<?php endif;?>
</div>
