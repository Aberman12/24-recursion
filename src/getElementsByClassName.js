// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var node = node || document.body;
  var results = [];
  
  if (node.classList === className){
    results.push(node.nodeName);
  }
  
  if (node.childNodes.length){
    for (var = i; i < node.childNodes.length; i++){
      results = results.concat(className, node.childNodes[i]);
    }
  }

  return results;
};
