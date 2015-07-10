describe("This should pass", function() {
    var a;

    it("and it will pass because val is indeed 10", function() {
        a = true;

        expect(val).toBe(10);
    });
});

describe("This should fail", function() {
    var a;

    it("and it will because 12 should be 10", function() {
        a = true;

        expect(val).toBe(12);
    });
});