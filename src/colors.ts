export const dark = {
  gray: '#1a1a1a',
  red: '#960033',
  text: '#ffffff',
};

export const light = {
  red: '#960033',
  gray: '#eeeeee',
  text: '#1a1a1a',
};

export const getColorScheme = () =>
  window.localStorage.getItem('colors') || 'dark';

export const colors = () =>
  window.localStorage.getItem('colors') == 'light' ? light : dark;
