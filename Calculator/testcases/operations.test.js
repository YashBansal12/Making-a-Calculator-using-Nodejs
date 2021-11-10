const { add, subtraction } = require("../src/operations");

//Addition
describe("Addition ", () => {
  test("test for addition", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(1.4, 6.8)).toBeCloseTo(8.2);
  });

  test("test for inputs are empty", () => {
    expect(() => {
      add("", 12);
    }).toThrow("Input values can not be empty");
    expect(() => {
      add(34, "");
    }).toThrow("Input values can not be empty");
  });

  test("test for string", () => {
    expect(() => {
      add("yas", 12);
    }).toThrow("Input values should be numbers");
    expect(() => {
      add(34, "ban");
    }).toThrow("Input values should be numbers");
  });

  test("test for object as input", () => {
    expect(() => {
      add({}, 12);
    }).toThrow("Input values should be numbers");
    expect(() => {
      add("yashbansal", {});
    }).toThrow("Input values should be numbers");
  });
});

//Subtraction
describe("Subtraction", () => {
  test("testing for subtraction", () => {
    expect(subtraction(3, 7)).toBe(-4);
    expect(subtraction(5, 2)).toBe(3);
    expect(subtraction(1.2, 2.3)).toBeCloseTo(-1.1);
  });

  test("test for inputs are empty", () => {
    expect(() => {
      subtraction("", 9);
    }).toThrow("Input values can not be empty");
    expect(() => {
      subtraction(1, "");
    }).toThrow("Input values can not be empty");
  });

  test("test for string", () => {
    expect(() => {
      subtraction("yas", 9);
    }).toThrow("Input values should be numbers");
    expect(() => {
      subtraction(1, "ban");
    }).toThrow("Input values should be numbers");
  });
  test("test for object as input", () => {
    expect(() => {
      subtraction({}, 9);
    }).toThrow("Input values should be numbers");
    expect(() => {
      subtraction("yashbansal", {});
    }).toThrow("Input values should be numbers");
  });
});
