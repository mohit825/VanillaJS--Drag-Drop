const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//FIll Listener

fill.addEventListener('dragstart' , dragStart);
fill.addEventListener('dragend' , dragEnd);

//Drag Functions

 function dragStart () {

    this.className += ' hold';
    setTimeout(() => {
        return this.className = 'invisible'
    } , 0) 
}

function dragEnd () {
    this.className = 'fill';
    
}

//looping through all empty divs

for (const empty of empties){
    empty.addEventListener('dragover' , dragOver);
    empty.addEventListener('dragenter' , dragEnter);
    empty.addEventListener('dragleave' , dragLeave);
    empty.addEventListener('drop' , dragDrop);
}

function dragOver (e){
    e.preventDefault();
    
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
    this.className
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}