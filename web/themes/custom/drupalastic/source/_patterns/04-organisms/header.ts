(function (): void {
  // alert('Hi');
  //document.getElementById('block-drupalastic-branding').classList.add('navbar-nav__wrapper');
  // menu toggle.
  // const block_drupal_branding = document.querySelector('#block-drupalastic-branding');
  // block_drupal_branding?.classList.add('navbar-nav__wrapper');

  const burger: any = document.querySelector('.burger');
  const nav: any = document.querySelector('.navbar-nav__list');

  const navLinks: any = document.querySelectorAll('.navbar-nav__list li');
  // Show and hide side menu.
  burger?.addEventListener('click', () => {
    nav?.classList.toggle('nav-active');
    // burger menu animation.
    burger?.classList.add('toggle');

    setTimeout(function () {
      const times: any = document.createElement('i');
      const textnode: any = document.createTextNode('');
      times?.appendChild(textnode);
      times?.classList.add('fas');
      times?.classList.add('fa-times');
      times?.classList.add('close-sidebar');
      nav?.appendChild(times);
      document.body.classList.add('disable-scroll');
      times.addEventListener('click', function () {
        let $this = times;
        $this.parentElement.classList.remove('nav-active');
        document.body.classList.remove('disable-scroll');
        $this.remove();
      });
    }, 100);
  });
})();
