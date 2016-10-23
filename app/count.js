exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let time;
    function countIt(){
      console.log(start++);
      if(start <= end){
        time = setTimeout(countIt,100);
      }
    };
    countIt();
    return {
     cancel: function () {
       time && clearTimeout(time);
     }
   };
  }
};
