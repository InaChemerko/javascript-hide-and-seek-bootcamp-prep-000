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
  
  var deepChild = current.querySelectorAll('*');
  
 return deepChild[deepChild.length - 1];

 }
     
    