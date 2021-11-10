class Matrix {
    static Sum(firstMatrix, secondMatrix) {
        var firstMatrixRows = firstMatrix.length,
            firstMatrixColumns = firstMatrix[0].length,
            result = [];
        for (var i = 0; i < firstMatrixRows; i++) {
            result[i] = [];
            for (var j = 0; j < firstMatrixColumns; j++)
                result[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
        }
        return result;
    }
    static Multiply(firstMatrix, secondMatrix) {
        var firstMatrixRows = firstMatrix.length,
            firstMatrixRows = secondMatrix.length,
            firstMatrixColumns = firstMatrix[0].length,
            firstMatrixColumns = secondMatrix[0].length,
            result = [];
        if (firstMatrixColumns != firstMatrixRows) return false;
        for (var i = 0; i < firstMatrixRows; i++) result[i] = [];
        for (var k = 0; k < firstMatrixColumns; k++) {
            for (var i = 0; i < firstMatrixRows; i++) {
                var t = 0;
                for (var j = 0; j < firstMatrixRows; j++) t += firstMatrix[i][j] * secondMatrix[j][k];
                result[i][k] = t;
            }
        }
        return result;
    }
}

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let matrix2 = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 0]
]

console.log(Matrix.Sum(matrix1, matrix2));
console.log(Matrix.Multiply(matrix1, matrix2));