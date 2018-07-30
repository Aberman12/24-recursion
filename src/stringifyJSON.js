// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string'){
    return '"'+obj+'"';
  } else if (Array.isArray(obj)){
    if (obj.length === 0){
      return "[]";  
    } else {
      var str0 = ''; 
      for(var i = 0; i < obj.length; i++){
        if (i === 0){
          str0 += '['+stringifyJSON(obj[i]);
        } else if (i < obj.length) {
          str0 += ','+stringifyJSON(obj[i]);
        } 
      }
    return str0 + ']';
    }
  } else if (typeof obj === 'object' && !Array.isArray(obj) && obj!==null){
    var str1 = '';
    for(var key in obj){
      if(typeof obj[key] === 'function' || obj[key] === undefined){
        str1 === '';
      } else {
        str1 += stringifyJSON(key)+':'+stringifyJSON(obj[key])+',';
      }
    }
    str1 = str1.slice(0, str1.length - 1);
    return "{" + str1 + '}';
  }
  return ""+obj;
};
