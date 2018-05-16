import 'bootstrap/dist/js/bootstrap.bundle';

import './styles/styles.scss';

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello Webpack';

  return element;
}

document.body.appendChild(component());
