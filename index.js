let array = [1, 2, 3, 4];

// Create your custom map method (myMap), which will work exactly similar to Array.map().

Array.prototype.customMAP = function (cb) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i));
  }

  return newArr;
};

let newArr = array.customMAP((x, i) => x * 2);

console.log(newArr);

// Create your custom forEach method (myForEach), which will work exactly similar to Array.forEach().

Array.prototype.myForeach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

array.myForeach(function (callback) {
  console.log(callback);
});

//   Create your custom filter method (myFilter), which will work exactly similar to Array.filter().

Array.prototype.myFilter = function (callback) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      arr.push(this[i]);
    }
  }

  return arr;
};

var x = array.myFilter(i => i>3)
console.log(x)


// Create your custom reduce method (myReduce), which will work exactly similar to Array.reduce().


Array.prototype.myReduce = function(callback){
    let a = 0;                         
    for(let i=0; i<this.length; i++)  
    {
        callback(a = a+this[i])       
    }
     
    return a;                         
}

let arr = [1,2,3,4,5,6,47];

let ans = arr.myReduce((acc,item) => acc+item);

console.log(ans)