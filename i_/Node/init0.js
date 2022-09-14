var nums = [9, 5, 3, 1, 6, 3];
console.log(nums);



//FIND MAXSLIDINGWINDOW
var windowSize = 2;
function findMaxSlidingWindow(nums, windowSize) {
    var result = [];
    for(var i = 0; i <= nums.length - windowSize; i ++){
        for(var j = i; j <= i + windowSize; j++){
            console.log(nums[j]);
        }
    }
};
//findMaxSlidingWindow(nums, windowSize);


//SUM EACH NUMBER ITERATIVE
var sumSeriesIterative = function (n){
    var x = 0;
    for (var i = 0; i <= n.length - 1; i ++){
        x += n[i];
    }
    return x;
}
//console.log(sumSeriesIterative(nums));


//SUM NUMBERS RECURSIVE
var sumSeriesRecursive = function(n, i, x){
if(i == n.length){
    console.log(x);
    return x;
}
console.log(n[i]);
x += n[i];
i++;
sumSeriesRecursive(n, i, x);
}
//sumSeriesRecursive(nums, 0, 0);

//Iterative Sum Power
function iTsumPowerOf(e, n){
    //Iteratively calculate the sum of the first n powers of a number.
    var sum = 0;
    for(var i = 1; i <= n; i ++){
        sum += Math.pow(e, i);
    }
    console.log(sum);
}
//iTsumPowerOf(2,2);

//RECURSIVE SUM POWER
function recSumPowerOf(e, n, x, i){
    if(i > n){
        console.log(x);
        return x;
    }
    x += Math.pow(e, i);
    i++;
    recSumPowerOf(e, n, x, i);
}
//recSumPowerOf(2,3, 0, 1);

//first char of integer.
var integer = 12345;
console.log(integer);

