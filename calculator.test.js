const {mean, median, mode} = require('./calculator')

describe("mean function", ()=> {
    test('return mean', () => {
        let mean = mean("1,3,5,7")
        expect(mean).toEqual(4)
    })
    test('return mean', () => {
        let mean = mean("1,3,5,7,20")
        expect(mean).toEqual(7.2)
    })
    test('return mean', () => {
        let mean = mean("10,20,35,40,50")
        expect(mean).toEqual(31)
    })
})

describe("median function", ()=> {
    test('return median', () => {
        let median = median("1,3,5,7")
        expect(median).toEqual(4)
    })
    test('return median', () => {
        let median = median("1,3,5,7,20")
        expect(median).toEqual(5)
    })
    test('return median', () => {
        let median = median("10,20,35,40,50")
        expect(median).toEqual(35)
    })
})

describe("mode function", ()=> {
    test('return mode', () => {
        let mode = mode("1,3,5,7,5")
        expect(mode).toEqual(5)
    })
    test('return mode', () => {
        let mode = mode("1,3,5,7,20")
        expect(mode).toEqual([1,3,5,7,20])
    })
    test('return mode', () => {
        let mode = mode("10,1,6,10")
        expect(mode).toEqual(10)
    })
})