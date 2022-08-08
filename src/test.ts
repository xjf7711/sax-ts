import { fromEvent } from 'rxjs';
import { add, sub } from './math';
import { greeting } from './greeter';
import './styles/color.less';
import './styles/index.scss';
// 在页面中调用时
fromEvent(document, 'DOMContentLoaded').subscribe(e => {
  console.log('document DOMContentLoaded e is ', e);
  const div = document.createElement('div');
  div.innerHTML = 'hello postcss';
  div.classList.add('hello_postcss');
  div.classList.add('blue');
  console.log('div.classList is ', div.classList);
  console.log('div.className is ', div.className);
  // div.className = '';

  document.body.append(div);

  const num1 = add(1, 2);
  console.log('num1 is ', num1);
  const num2 = sub(2, 1);
  console.log('num2 is ', num2);

  document.querySelectorAll('.app')[0].innerHTML = 'Hello typeScript start';

  const app = document.querySelector('.app');
  app && fromEvent(app, 'click').subscribe(async (e) => {
    console.log('fromEvent app click . ');
    greeting();
  });
});
