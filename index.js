function rotateImage(matrix){
 matrix=transpose(matrix);
 matrix.forEach((row)=>inplaceReverse(row));
 return matrix;
}
function inplaceReverse(row) {
    var i = 0;
    while (i < row.length - 1) {
        row.splice(i, 0, row.pop());
        i++;
    }
    return row;
}
function transpose(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
}
console.log(rotateImage([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))
console.log(rotateImage([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
]));