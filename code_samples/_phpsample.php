


<?php echo home_url( '/' ); ?> <!--For Link URL -->
<?php bloginfo('template_directory'); ?>/ <!-- For Image URL -->

<?php the_post_thumbnail('large-thumb'); ?>

<!-- If specific page... -->
<?php if(is_page('home')){ ?>
<?php } elseif(is_page('services') OR $post->post_parent == '14' ): { ?>
<?php } else { ?>
<?php } ?>

<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?><!-- Replace with main navigation -->
<?php wp_nav_menu( array('menu' => 'footer', 'after' => '' )); ?><!-- Replace with footer navigation -->.

// Echo a certain amount of characters
<?php echo substr($post->post_content, 0, 100) ?>...

<!-- Output parent page title -->
<h1>
    <?php
    $parent_title = get_the_title($post->post_parent);
    echo $parent_title;
    ?>
</h1>

<!-- Post Format Change -->
<?php the_time('m/d/Y') ?>


<?php
      //Sidebar Automatic Sub Menu
      //This code will not work if placed after a widget block in the sidebar.
      if($post->post_parent)
      $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
      else
      $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
      if ($children) { ?>
      <ul>
      <?php echo $children; ?>
      </ul>
<?php } ?>

<!-- List the child pages of current page -->
<?php global $post; $thispage = $post->ID; // grabs the current post id from global and then assigns it to thispage ?>
        <?php $pagekids = get_pages("child_of=".$thispage."&sort_column=menu_order"); // gets a list of pages that are sub pages of the current page and assigns then to pagekids ?>
        <?php if ($pagekids) { // if there are any values stored in pagekids and therefore the current page has subpages ?>
          <ul>
            <?php wp_list_pages("depth=1&title_li=&sort_column=menu_order&child_of=".$thispage); // display the sub pages of the current page only ?>
            </ul>
        <?php } elseif($post->post_parent)
        $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0"); if ($children) { // if there are no sub pages for the current page ?>
  <ul>
  <?php echo $children; ?>
  </ul>
<?php } ?>


<!-- Emmet -->
div.container>div.row>div.col-md-


/* icon list
/ li:before   
/     font-family: 'FontAwesome'
/     content: '\f067'
/     margin: 0 5px 0 -15px


<!-- Pulled from http://code.google.com/p/html5shiv/ -->
<!--[if lt IE 9]>
  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

http://stackoverflow.com/questions/23213296/why-does-sublime-text-editor-3-autocomplete-when-i-press-return
