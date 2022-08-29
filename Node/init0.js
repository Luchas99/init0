var nums = [9, 5, 3, 1, 6, 3];
var windowSize = 2;



function findMaxSlidingWindow(nums, windowSize) {
    var result = [];
    
    for(var i = 0; i <= nums.length - windowSize; i ++){
        for(var j = i; j <= i + windowSize; j++){
            console.log(nums[j]);
        }
    }

};

findMaxSlidingWindow(nums, windowSize);
