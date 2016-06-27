exports = typeof window === 'undefined' ? global : window;
//Completed**************************************************
exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
    let sum = arr.reduce(function(previous,current,index, array){
      return previous + current;
    });
    return sum;
  },

  remove: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
          if(arr[i]===item) {
              arr.splice(i,1);
              i--;
          }
      }
      return arr;
  },
  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
          if(arr[i]===item) {
              arr.splice(i,1);
              i--;
          }
      }
      return arr;
  },

  append: function(arr, item) {
      return arr.concat(item);
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
     arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
    let countItem =  arr.filter(function(e){
        return e === item
      });
      return countItem.length;
  },

  duplicates: function(arr) {
    var seen = [];
    var duplicates = [];
    for(i = 0; i < arr.length; i++){
      if(seen.indexOf(arr[i]) === -1){
        seen.push(arr[i]);
      }else if(duplicates.indexOf(arr[i]) === -1){
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {

      arr.forEach(function(element, index, array){
        arr[index] = Math.pow(element,2);
      });
      return arr;
  },

  findAllOccurrences: function(arr, target) {
      let occurrences = [];
      arr.forEach(function(element,index,array){
            if(element === target){
              return occurrences.push(index);
            }
          });
      return occurrences;
  }
};
// ARRAY Completed**********************************************************
