const button = document.createElement('button');

button.innerText = 'Click me';
button.onclick = () => {
  // code-splitting
  System.import('./image-viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
