const {mean, median, mode} = require('./calculator')

describe("mean function", ()=> {
    test('return mean', () => {
        let mean = mean("1,3,5,7")
        expect(mean).toEqual(4)
    })
    test('return mean', () => {
        let mean = mean("1,3,5,7,20")
        expect(mean).toEqual(5)
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
        expect(median).toEqual(30)
    })
})

describe("mean function", ()=> {
    test('return mean', () => {
        let mean = mean("1,3,5,7")
        expect(mean).toEqual(4)
    })
    test('return mean', () => {
        let mean = mean("1,3,5,7,20")
        expect(mean).toEqual(5)
    })
    test('return mean', () => {
        let mean = mean("10,20,30,40,50")
        expect(mean).toEqual(30)
    })
})