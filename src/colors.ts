export const dark = {
  gray: '#1a1a1a',
  red: '#960033',
  text: '#ffffff',
  opaque: '#202020cc',
};

export const light = {
  red: '#960033',
  gray: '#eeeeee',
  text: '#1a1a1a',
  opaque: `#e5e5e5cc`,
};

export const getColorScheme = () =>
  window.localStorage.getItem('colors') || 'dark';

export const colors = () =>
  window.localStorage.getItem('colors') == 'light' ? light : dark;
