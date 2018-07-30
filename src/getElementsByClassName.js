// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var node = node || document.body;
  var results = [];
  
  if (node.classList && _.contains(node.classList, className)){
    results.push(node);
  }
  
  if (node.childNodes.length){
    for (var i = 0; i < node.childNodes.length; i++){
      results = results.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }
  console.log(results)
  return results;
};
