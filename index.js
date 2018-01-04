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
  while (current) {
    if (current.children[0]) {
      var deepChild = current.children[0];
      console.log (deepChild);
   }
    current = current.children[0][0];
    if (current === null) {
      return deepChild.innerHTML;
    }
   
    }
  }
 
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