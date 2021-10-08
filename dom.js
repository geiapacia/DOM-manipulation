const container = document.querySelector('#container');//reference that already exist on HTML

const content = document.createElement('div');//create a new div to store it in the variable content
content.classList.add('content');//add class and some text to the content div
content.textContent='This is the glorious text-content!';

container.appendChild(content);//append the div to container

const para = document.createElement('p');
para.classList.add('para');
para.textContent='Hey I\'m red!';
para.style.color= 'red';

container.appendChild(para);

const head3 = document.createElement('h3');
head3.classList.add('thirdHeading');
head3.textContent='I\'m a blue h3!';
head3.style.color='blue';

container.appendChild(head3);

const newDiv = document.createElement('div');
newDiv.style.border='thick solid black';
newDiv.style.backgroundColor='pink';

const head1 = document.createElement('h1');
head1.classList.add('head3');
head1.textContent='I\'m a div';

newDiv.appendChild(head1);


const newPara = document.createElement('p');
newPara.classList.add('newPara');
newPara.textContent='ME TOO!';

newDiv.appendChild(newPara);

container.appendChild(newDiv);