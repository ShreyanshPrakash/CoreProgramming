/*
566. Reshape the Matrix

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/


/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    
    const r0 = mat.length, c0 = mat[0].length, result = [];
   if(r * c != r0 * c0) {
       return mat;
   }
   let array = [];
   for(let i = 0; i < r0; i++) {
       for(let j = 0; j < c0; j++) {
           array.push(mat[i][j]);
       }
   }
   while(array.length) {
       result.push(array.splice(0, c));
   }
   return result;
   
};