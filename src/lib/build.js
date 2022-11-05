export function build(parent, el, options) {
  // console.log('build options', options);
  const element = document.createElement(el);
  if (options?.className) element.classList.add(options.className);
  if (options?.text) {
    if (el === 'input') element.setAttribute('value', options.text);
    else element.innerText = options.text;
  }
  if (options?.contentEditable) element.contentEditable = true;

  if (options?.onClick) element.addEventListener('click', options.onClick);
  if (options?.onInput) element.addEventListener('input', options.onInput);
  parent.appendChild(element)

  return element;
}