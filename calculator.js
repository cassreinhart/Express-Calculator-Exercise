function mean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((acc, cur) => {
        return acc + cur;
    }) / arr.length;
}

function median(nums) {
    let evenSetMid = [arr[((arr.length / 2) - 1)], arr[((arr.length / 2))]];

    return arr.length % 2 !== 0 ? Math.floor(arr[arr.length / 2]) : mean(evenSetMid)
}

function mode(nums) {
    let valueFreq = {};
    let mostFrequent;

    for (let x of arr) {
        valueFreq[x] ? valueFreq[x] + 1 : valueFreq[x] = 1;
    }
    for (let k of valueFreq) {
        if (valueFreq[k] > mostFrequent) mostFrequent = valueFreq[k]
        else if (Array.isArray(mostFrequent) && (valueFreq[k] == mostFrequent)) {
            mostFrequent.push(valueFreq[k])
        } else if (valueFreq[k] == mostFrequent) {
            mostFrequent = [valueFreq[k]]
        }
    }
    return mostFrequent;
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

module.exports = { mean, median, mode }