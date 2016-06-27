exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    // debugger;
     if(!(a || b) === true) {
      return false;
    }else{
      return true;
    }
  },

  and: function(a, b) {
    if(!(a && b) === true){
      return false
    } else {
      return true;
    }
  }
};
