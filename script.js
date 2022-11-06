


function numRemainder(){

    let a = Number(prompt('Please enter the first number:'));
    let b = Number(prompt('Please enter the second number'));


    if ((isNaN(a)) || (isNaN(b) || a == '' || b == '') ) {
    alert('You must enter numbers only') ; 
    }else  if((a % b)!=0){
        alert('There is a remainder!');
    }else{
        alert('There is no remainder!');

    }
    

}