// // 1. Write a function that creates a closure and returns a function that can adda specific number to any number passed to it. For example, if the closure is
// //    created with 5, the returned function should add 5 to any number passed
// //    to it.

function sum(a) {
  
    return function (b) { // anonymous function
      console.log(a+b);
    }
  }
  // console.log(sum(5)(5));
  let innerFunction = sum(5);
  innerFunction(5);

  
// // 2. Write a recursive function that searches an array for a specific value. The
// //    function should return true if the value is found, and false if it is not. You
// //    can assume that the array is not nested.



let arr = ["Apple", "Orange", "Mango"];
function recFunc(arr, val){
  if(arr.includes(val) === true){
      return true;
  }
  else
  return false; 
}
console.log(recFunc(arr, "Mango"));

// Another way to do question no 2:

// let arr = ["Apple", "Orange", "Mango"];
// function recFunc(arr){
//   if(arr.includes("Apple+") === true){
//       return true;
//   }
//   else
//   return false; 
// }
// console.log(recFunc(arr));


// 3. Write a function that adds a new paragraph element to the bottom of an
//    HTML document. The function should take a string argument that will be
//    used as the text content of the new paragraph element.

let para = function(data) {
  const myPara = document.createElement("p");
  myPara.innerText = data;
  document.body.appendChild(myPara);
}
para("The is the Paragraph at the bottom");

// 4. Write a function that adds a new list item to an unordered list in an HTML
//    document. The function should take a string argument that will be used as
//    the text content of the new list item.

let list = function(data) {
  const newList = document.createElement("li");
  newList.innerText = data;
  document.querySelector("ul").appendChild(newList);
}
list("New list item");

// 5. Write a function that changes the background color of an HTML element.
//    The function should take two arguments: the first argument is a reference
//    to the HTML element, and the second argument is a string representing
//    the new background color.

let colorPara = function(paraRef,bgColor) {
  let changedPara =document.querySelector("#" + paraRef);
  changedPara.innerHTML = "<b>Pakistan Zindabad</b>"
  changedPara.style.backgroundColor = "#" + bgColor;

};
colorPara("my-para","f2f");

// 6. Write a function that saves an object to localStorage. The function should
//    take two arguments: the first argument is a string representing the key to
//    use for storing the object, and the second argument is the object to store.


function saveObject(key, obj) {
  // Convert the object to a JSON string
  const json = JSON.stringify(obj);
  
  // Save the JSON string to localStorage using the provided key
  localStorage.setItem(key, json);
}
saveObject("name","Asad");


// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.



function showObject(key) {
  const json = localStorage.getItem(key);
  const obj = JSON.parse(json);
  return obj;
 
  }
  console.log(showObject('name'));

// 8. Write a function that takes an object and saves each property to
//    localStorage using the property name as the key and the property value as
//    the value. The function should also retrieve the object from localStorage
//    and return it as a new object.

const obj = {
  nickname: "Ali",
  age: 25,
  city: "Chakwal"
};

function saveObjectProperty(obj) {
  
  for (const key in obj) {
      const value = obj[key];
      const json = JSON.stringify(value);
      localStorage.setItem(key, json);
  }
      const retrievedObj = {};
    for (const key in obj) {
        const json1 = localStorage.getItem(key);
        const value1 = JSON.parse(json1);
        retrievedObj[key] = value1;
    }
    return retrievedObj;
  }
  const savedAndRetrieved = saveObjectProperty(obj);
  console.log(savedAndRetrieved);