(function (): void {
  const burger: any = document.querySelector('.nav-toggle');
  const headernavul: any = document.querySelector('.header__nav');
  const headernav: any = document.querySelector('#block-drupalastic-main-menu');
  headernav.classList.add('header__nav__wrapper');

  // Show and hide side menu.
  burger?.addEventListener('click', () => {
    headernavul?.classList.toggle('nav-active');
    // burger menu animation.
    burger?.classList.add('toggle');
    setTimeout(function () {
      const times: any = document.createElement('i');
      const textnode: any = document.createTextNode('');
      times?.appendChild(textnode);
      times?.classList.add('fas');
      times?.classList.add('fa-times');
      times?.classList.add('close-sidebar');
      headernavul?.appendChild(times);
      document.body.classList.add('disable-scroll');
      times.addEventListener('click', function () {
        const $this = times;
        $this.parentElement.classList.remove('nav-active');
        document.body.classList.remove('disable-scroll');
        $this.remove();
      });
    }, 100);
  });
})();
