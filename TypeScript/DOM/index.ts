//! para não ser null
// const form = document.querySelector("form")!;

//as HTMLAnchorElement para o #id não ser elemento genérico
const form = document.querySelector('#my-link') as HTMLAnchorElement;
const link = document.querySelector('a')!;

//sem ! o event não funciona pois o valor pode ser null
link.addEventListener('click', () => {
  console.log('click');
});
