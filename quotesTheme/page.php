<?php get_header(); ?>

<?php if( have_posts() ) :
//The WordPress Loop: loads post content 
    while( have_posts() ) :
        the_post(); ?>
    <div id = "content" class="site-content">
  
    <h2><?php the_title(); ?></h2>
    <?php the_content(); ?>
    </div> 

    
    <!-- Loop ends -->
    <?php endwhile;?>

    <?php the_posts_navigation();?>

<?php else : ?>
        <p>No posts found</p>
<?php endif;?>

    
<?php get_footer();?>