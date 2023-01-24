function mean(arr) {
    let sum = 0;

    for(let x of arr) {
        sum+= x;
    }
    return sum / arr.length;
}

function median(arr) {
    let evenSetMid = [arr[((arr.length / 2) - 1)], arr[((arr.length / 2))]];

    return arr.length % 2 !== 0 ? Math.floor(arr[arr.length / 2]) : mean(evenSetMid)
}

function mode(arr) {
    let valueFreq = {};
    let mostFrequent;

    for (let x of arr) {
        valueFreq[x] ? valueFreq[x] + 1 : valueFreq[x] = 1;
    }
    for (let k of valueFreq) {
        if (valueFreq[k] > mostFrequent) mostFrequent = valueFreq[k];
    }
    return mostFrequent;
}

module.exports = { mean, median, mode }