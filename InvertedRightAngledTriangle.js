function invertedTriangle(height) {
  for (let i = height; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
invertedTriangle(5);
