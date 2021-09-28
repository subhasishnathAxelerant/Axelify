(function (): void {
  const burger: HTMLDivElement | null = document.querySelector('.burger');
  const nav = document.querySelector('.navbar-nav__list');

  const navLinks = document.querySelectorAll('.navbar-nav__list li');
  // Show and hide side menu.
  burger?.addEventListener('click', () => {
    nav?.classList.toggle('nav-active');
    // burger menu animation.
    burger?.classList.add('toggle');

    setTimeout(function () {
      var times = document.createElement('i');
      var textnode = document.createTextNode('');
      times?.appendChild(textnode);
      times?.classList.add('fas');
      times?.classList.add('fa-times');
      times?.classList.add('close-sidebar');
      nav?.appendChild(times);
      document.body.classList.add('disable-scroll');
      times.addEventListener('click', function () {
        this.parentElement?.classList.remove('nav-active');
        document.body.classList.remove('disable-scroll');
        this?.remove();
      });
    }, 100);
  });
})();
