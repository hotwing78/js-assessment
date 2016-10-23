exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let p1 = new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve(value);
      },100);
    });

    return p1;
  },

  manipulateRemoteData: function(url) {
    var uri = url;
    var promise = new Promise(function(resolve,reject){
      var req = new XMLHttpRequest();
      req.open('GET',uri);
      req.send();
      req.onload = function(){
        if(this.status === 200){
            let names = []
            let people = JSON.parse(this.response);
            for (let i = 0; i < people['people'].length; i++){
              names.push(people['people'][i].name);
          }
          resolve(names.sort());
        }else{
          reject(this.statusText);
        }
      };
      req.onerror = function(){
        reject(this.statusText);
      }
    });
    return promise;
  }
};
