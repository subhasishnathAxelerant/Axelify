const menuIcon = document.querySelector('.nav__icon');
const headerMain = document.querySelector('.navbar-menu-container');

menuIcon?.addEventListener('click', () => {
  menuIcon?.classList?.toggle('nav__icon--active');
  headerMain?.classList?.toggle('navbar-menu-container--active');
});
