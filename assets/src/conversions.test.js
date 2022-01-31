import { convert } from "./conversions";

describe("convert temps", () => {
  it("should handle celsius 1", () => {
    expect(convert(32, "celsius")).toEqual(0);
  });

  it("should handle celsius 2", () => {
    expect(convert(50, "celsius")).toEqual(10);
  });

  it("should handle celsius 3", () => {
    expect(convert(104, "celsius")).toEqual(40);
  });

  it("should handle kelvin 1", () => {
    expect(convert(-457.87, "kelvin")).toEqual(1);
  });

  it("should handle kelvin 2", () => {
    expect(convert(-279.67, "kelvin")).toEqual(100);
  });

  it("should handle kelvin 3", () => {
    expect(convert(-99.67, "kelvin")).toEqual(200);
  });

  it("should throw if given incorrect temp type", () => {
    try {
      convert(10, "foobar");
    } catch (error) {
      expect(error).toEqual(new Error("Target 'foobar' is not a valid type of temperature."));
    }
  });

});
