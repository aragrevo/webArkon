const routes = [
  { template: 'home', name: 'Inicio', icon: 'home', path: '/' },
  {
    template: 'services',
    name: 'Servicios',
    icon: 'dashboard',
    path: '/services',
  },
  { template: 'gallery', name: 'Galería', icon: 'photo', path: '/gallery' },
  { template: 'about', name: 'Nosotros', icon: 'info', path: '/about' },
  {
    template: '<Contact />',
    name: 'Contáctanos',
    icon: 'phone',
    path: '/contact',
  },
];

export default routes;
