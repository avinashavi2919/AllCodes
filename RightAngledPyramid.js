function rightAngledPyramid(height) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    
    for (let j = 1; j <= height - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}
rightAngledPyramid(5);
