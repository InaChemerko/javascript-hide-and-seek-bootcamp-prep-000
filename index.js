function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i< lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
  return lis;
}

function deepestChild(){
  var current = document.querySelector('#grand-node');
  console.log(current);
  var deepChild = current.querySelectorAll('*');
  console.log(deepChild);
  for (var i = 0; i<deepChild.length; i++){
    console.log('hello');
    console.log(deepChild[i]);
    
  }
  var b = deepChild.length - 1;
  console.log(deepChild[b]);
  console.log(deepChild[b].innerHTML);
  return deepChild[b];

 }
     
    /*if (deepChild.querySelectorAll('*')[i].childElementCount === 0) {
      return deepChild.querySelectorAll('*')[i];*/
  
 
    /*a(child);
   
 return child.innerHTML;
}

function a(current){
  while (current.childNodes){
    var child = current.childNodes;
    a(child);
   
  }
  return child;
  }


/*function deepestChild(){
  var current = document.getElementById('#grand-node');
  console.log(current);
  var next = [];
  var deep;
  while(current){
    if(Array.isArray(current)){
  for (var i = 0; i< current.length; i++){
    next.push(current[i]);
    console.log(next);
    deep = current[i];
    console.log(deep);
  }}
  current = next.shift();
  }
  console.log(deep);
  return deep;
 } */