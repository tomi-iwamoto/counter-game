//When I click on add button the number will go up with each click
//when I click on lower button, the number goes down. 
//the element with the id number changes numbers when clicked on one of the buttons

let number = document.getElementById('number');
let addButton = document.getElementById('add');
let subtractButton = document.getElementById('subtract');
let count = 0;

//this function is going to make the number go up
function add(){
  count += 1; //this is equal to counter = counter + 1;
  number.innerHTML = count;

  if(count >= 0){
      number.style.color = 'green';
  }
}

//this function will make the number go down
function sub(){
    count -= 1;
    number.innerHTML = count;

    if(count < 0){
        number.style.color = 'red';
    }
}

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', sub);



