exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);

  },

  sum: function(arr) {
    return arr.reduce(function(pre, cur){
      return pre + cur;
    });

  },

  remove: function(arr, item) {
    return arr.filter(function(elem,index,array){
      return elem !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var len = arr.length;
    for(let i = 0; i < len; i++){
      if(arr[i] === item){
        arr.splice(i,1);
        i--;
        len--;
      }
    };
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr
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
    let dups = [];
    arr.sort();
    for(let i = 0; i<arr.length; i++){
      if(arr[i] === arr[i+1] && dups.indexOf(arr[i]) === -1){
        dups.push(arr[i]);
      }
    }
    return dups;
  },

  square: function(arr) {
    return arr.map(function(elem,index,arr){
      return Math.pow(elem, 2);
    });
  },

  findAllOccurrences: function(arr, target) {
    let occurence = [];
    for(let i = 0; i <arr.length; i++){
      if(arr[i] === target){
        occurence.push(i);
      }
    }
    return occurence;
  }
};
