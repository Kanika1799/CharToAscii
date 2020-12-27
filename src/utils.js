export const calculateChar = (char) => {
  var c = char.charCodeAt();
  var d = c + 10;
  var m = String.fromCharCode(d);
  return m;
};
