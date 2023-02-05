const container = document.querySelector('#container');

const main = document.querySelector('#main')

const containerWidth = 500;

const button = document.querySelector('#button');


button.addEventListener('click', function() {
  
  // main.innerHTML = "";
 

    acceptUserSize();
   
   
    // setTimeout(myGreeting, 5000);

});



// const squareWidth = parseInt(prompt("Type a value for grid size: "));

 //number of squares in a row/column
const numberOfSquares = Math.ceil(containerWidth/16);


//inner divs/containers loop in block
for (let i = 0; i<numberOfSquares; i++){  

  //squares container
  const smallContainer = document.createElement('div');

  smallContainer.style.cssText = 'display: flex';

  // squares loop
  for (let j = 0; j<numberOfSquares; j++){

    const square = document.createElement('div');
    
    // const squareWidthToStr = squareWidth.toString();

    square.style.width = '16px';
    square.style.height = '16px';
    square.style.border = '1px solid black';
    
    // square.classList.add('square');

    square.addEventListener('mouseenter', function() {
      square.classList.add('square');
    });
    
    smallContainer.appendChild(square);
   
  }

    
    container.appendChild(smallContainer);

}



function acceptUserSize(){

  
const squareWidth = parseInt(prompt("Type a value for grid size: "));



 //number of squares in a row/column
const numberOfSquares = Math.ceil(containerWidth/squareWidth);


//inner divs/containers loop in block
for (let i = 0; i<numberOfSquares; i++){  

  //squares container
  const smallContainer = document.createElement('div');

  smallContainer.style.cssText = 'display: flex';

  // squares loop
  for (let j = 0; j<numberOfSquares; j++){

    const square = document.createElement('div');
    
    const squareWidthToStr = squareWidth.toString();

    square.style.width = squareWidthToStr+'px';
    square.style.height = squareWidthToStr+'px';
    square.style.border = '1px solid black';
    
    // square.classList.add('square');

    square.addEventListener('mouseenter', function() {
      square.classList.add('square');
    });
    
    smallContainer.appendChild(square);
   
  }

    
    container.appendChild(smallContainer);

}


}
 //square width from user

