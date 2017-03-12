/**
 * Created by minhi_000 on 12.03.2017.
 */
import Counter from './Counter';

let clickedButton = document.createElement('button');
clickedButton.innerHTML = 'Clicked 0 times';
let wrapperDiv = document.getElementById('wrapper');
wrapperDiv.appendChild(clickedButton);

const counter = new Counter();
clickedButton.addEventListener('click', () => {
    counter.increase();
    let times = counter.getCount();
    clickedButton.innerHTML = `Clicked ${times} times`;
});
