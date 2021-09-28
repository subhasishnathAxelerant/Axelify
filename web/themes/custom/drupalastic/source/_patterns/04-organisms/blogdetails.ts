(function () {
  if (document.body.classList.contains('page-node-type-blog')) {
    document
      .getElementsByTagName('main')[0]
      .classList.add('blog__details__layout');
    document
      .getElementsByClassName('layout-content')[0]
      .classList.add('blog__details__layout-content');
    document
      .getElementsByClassName('layout-sidebar')[0]
      .classList.add('blog__details__layout-sidebar');
    const blog__details__layout_html =
      document.getElementsByTagName('main')[0].innerHTML;
    const blog__details__layout_html_new =
      "<div class='blog__details__layout-container'>" +
      blog__details__layout_html +
      '</div>';
    document.getElementsByTagName('main')[0].innerHTML =
      blog__details__layout_html_new;
    // blog details share block
    const block_blogsocialshare: any = document.getElementById(
      'block-blogsocialshare',
    );
    // checking if the element exists at all.
    if (
      typeof block_blogsocialshare != 'undefined' &&
      block_blogsocialshare != null
    ) {
      block_blogsocialshare.classList.add('blog__details_socialshare');
      block_blogsocialshare.lastElementChild!.classList.add(
        'blog__details_socialshare_field',
      );
    }
    // appending social share into blog__details__content
    const blog__details__content: any = document.getElementsByClassName(
      'blog__details__content',
    )[0];
    blog__details__content.appendChild(block_blogsocialshare);

    // const name_author: any = document.querySelectorAll('')[0]

    const block_backtohome: any = document.getElementById('block-backtohome');
    block_backtohome.classList.add('blog__block_backtohome');

    // blog text
    const footer__blog__list__item__text: any = document.querySelector(
      '.footer__blog-list__item__text',
    );
    const blog__details__author__info: any = document.querySelector(
      '.blog__details__author__info',
    );
    footer__blog__list__item__text.insertBefore(
      blog__details__author__info,
      footer__blog__list__item__text.childNodes[0],
    );

    // adding classes to all of the child nodes of .blog__details__tags
    const blog__details__tags_children: any = document.getElementsByClassName(
      'blog__details__tags',
    )[0].childNodes;
    for (var i = 0; i < blog__details__tags_children.length; i++) {
      blog__details__tags_children[i].className = 'blog__details__tags__each';
    }

    const blog__author__block: any =
      document.getElementsByClassName('blog__author-block')[0];
    const blog__author__block_views_row: any =
      blog__author__block.getElementsByClassName('views-row')[0];
    blog__author__block_views_row.classList.add(
      'blog__author__block__views__row',
    );
    const author_block_content_wrapper: any = document.createElement('div');
    author_block_content_wrapper.className =
      'blog__author__block__content__wrapper';
    blog__author__block_views_row.appendChild(author_block_content_wrapper);

    // blog__details_socialshare_field ul and p class addition.
    const blog__details_socialshare_field: any = document.getElementsByClassName(
      'blog__details_socialshare_field',
    )[0];
    const blog__details_socialshare_field_ul: any =
      blog__details_socialshare_field.getElementsByTagName('ul')[0];
    const blog__details_socialshare_field_paragraph: any =
      blog__details_socialshare_field.getElementsByTagName('p')[0];
    blog__details_socialshare_field_paragraph.classList.add(
      'blog__details_socialshare_text',
    );
    blog__details_socialshare_field_ul.classList.add(
      'blog__details_socialshare_list',
    );
  }
})();
