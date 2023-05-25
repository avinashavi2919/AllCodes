function rectangle(width, height) {
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < width; j++) {
      row += '* ';
    }
    console.log(row);
  }
}
rectangle(5, 5);






