function rightInvertedPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= rows - i; j++) {
      pattern += ' ';
    }
    
    for (let k = 1; k <= i; k++) {
      pattern += '*';
    }
    
    console.log(pattern);
  }
}
rightInvertedPyramid(5);
