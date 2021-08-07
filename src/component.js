export default (text = "This is a test") => {
  const element = document.createElement("h1");
  element.innerHTML = text;

  return element;
};
