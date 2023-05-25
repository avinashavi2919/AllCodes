function StarPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    var pattern = '';
    for (var j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }
}
var rows = 5;
StarPyramid(rows);
