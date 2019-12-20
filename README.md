# 301-practice-3


## 1. How long is the array returned by .map()? .filter()?

in map() the length of returned array is the same of original, 
but in the filter() it will returns just the truthy elements.

## 2. What does the following code do:

$('button#primary').on('click', function() {
  placeOrder(shoppingCartItems);
});

*solution:*
when the button is clicked it will excute the function placeOrder with the argument shoppingCartItems.


## 3. Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.

Your code goes here...

function names (arr){
    arr.forEach((name)=>{
       console.log(name.toUpperCase())
    })
};