function mean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((acc, cur) => {
        return acc + cur;
    }) / arr.length;
}

function median(nums) {
    //sort array, find mid
    nums.sort((a, b) => a - b);

    let midIdx = Math.floor(nums.length / 2)
    let evenSetMid = [nums[((midIdx) - 1)], nums[((midIdx))]]; //find the middle two vals if even array

    return nums.length % 2 !== 0 ? Math.floor(nums[midIdx / 2]) : mean(evenSetMid)
}

function mode(nums) {
    let valueFreq = {};
    let mostFrequent;
    let count = 0;

    for (let x of arr) {
        valueFreq[x] ? valueFreq[x] + 1 : valueFreq[x] = 1;
    }
    for (let key in valueFreq) {
        if (valueFreq[key] > count) {
            mostFrequent = key;
            count = valueFreq[key]
        } else if (Array.isArray(mostFrequent) && (valueFreq[key] == count)) {
            mostFrequent.push(key)
        } else if (valueFreq[key] == count) {
            mostFrequent = [key]
        }
    }
    return +mostFrequent;
}

function convertAndValidateArray(numsAsStrings) {
    let res = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valAsNum = +numsAsStrings[i];
        if(Number.isNaN(valAsNum)) {
            return new Error(
                `The value ${numsAsStrings[i]} is not a valid number.`
            )
        }
        res.push(valAsNum)
    }
    return res;
}

module.exports = { mean, median, mode, convertAndValidateArray }