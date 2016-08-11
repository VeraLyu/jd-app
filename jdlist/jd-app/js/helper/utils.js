export const getId = (function *() {
  let initNumber = 0;
  while(true) {
    initNumber = initNumber + 1;
    yield initNumber;
  }
}());

export function getStringId(length) {
  let s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.apply(null, Array(length)).map(
    function () {
      return s.charAt(Math.floor(Math.random() * s.length));
    }).join('');
}

export function roundToK(number) {
  if (number > 1000) {
    return Math.round(number / 1000) + 'K';
  }
  return number;
}
