class HashTable {
    constructor(bucketSize = 1024) {
      this._bucketSize = bucketSize;
      this._data = new Array(bucketSize);
    }
  
    hashKey(key) {
      const h = JSON.stringify(key, Object.keys(key).sort())
        .split('')
        .reduce((acc, cur, i) => acc + cur.charCodeAt(0) * (i+1), 0);
      return h % this._bucketSize;
    }
    set(key, value) {
      return this._data[this.hashKey(key)] = value;
    }
    get(key) {
      return this._data[this.hashKey(key)];
    }
    hasItem(key) {
      if(this._data[this.hashKey(key)] !== null){
        return true
      }
      else{
        return false
      }
    }
    values = function()
    {
        var values = [];
        for (var k in this._data) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }
    each = function(fn) 
    {
      for (var k in this._data) 
      {
        if (this.hasItem(k)) 
        {
          fn(k, this._data[k]);
        }
      }
    }
  }


let hshtble = new HashTable()
hshtble.set("Kulsum","Not coool enough")
hshtble.set("Hanzala","Cooler than kulsum")
hshtble.set("Qasim","the coolest")
console.log(hshtble.hasItem('Qasim'))
console.log(hshtble)