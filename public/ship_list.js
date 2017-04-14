var ShipList = function(url){
  this.url = url;
  this.ships = [];
}

ShipList.prototype = {
  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url); 

    request.onload = function(){ 
      if(request.status === 200){
        var jsonString = request.responseText;
        var result = JSON.parse(jsonString);
        // console.log(result);
        this.ships = this.ships.concat(result.results);
        if(this.ships.length !== result.count){
          this.url = result.next;
          this.getData(callback);
        } else {
          callback(this.ships);
        }
      }
    }.bind(this);

    request.send();

  }
}