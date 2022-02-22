const { sum, times, sub, div }  = require('./sum')

test("add 1 + 2 should be 3", ()=> {
    expect(sum(1,2)).toBe(3);
});

test("add 2 - 1 should be 1", ()=> {
    expect(sub(2,1)).toBe(1);
});

test("add 2 * 2 should be 4", ()=> {
    expect(times(2,2)).toBe(4);
});

test("add 4 / 2 should be 2", ()=> {
    expect(div(4,2)).toBe(2);
});
