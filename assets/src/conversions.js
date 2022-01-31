import memoize from "memoizee";

const types = ["celsius", "kelvin"];

const convert = memoize((temp, target) => {
  if (!types.includes(target))
    throw new Error(`Target '${target}' is not a valid type of temperature.`);
    
  // celsius formula
  if (target === "celsius")
    return Math.ceil((temp - 32) * (5/9));
  
  // kelvin formula
  return Math.ceil((temp - 32) / 1.8 + 273.15)
});

export { convert };
