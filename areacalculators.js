function calculateRectangleArea(length, width) {
  let recArea = length * width;
  while (length > 0 && width > 0) {
    return recArea;
  }
}
function calculateTriangleArea(base, height) {
  let triArea = base * height / 2
  while (base > 0 && height > 0) {
    return triArea;
  }
}
function calculateCircleArea(radius) {
  let cirArea = Math.PI * Math.pow(radius, 2);
  while (radius > 0) {
    return cirArea;
  }
}
console.log(calculateRectangleArea(3, 0));
console.log(calculateTriangleArea(4, 0));
console.log(calculateCircleArea(5));