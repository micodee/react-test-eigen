import React from "react";

// Silahkan cari hasil
// dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
const arr1 = matrix[0]
const arr2 = matrix[1]
const arr3 = matrix[2]
const diagonal1 = arr1[0]+arr2[1]+arr3[2]
const ar1 = matrix[0]
const ar2 = matrix[1]
const ar3 = matrix[2]
const diagonal2 = [ar1[2]+ar2[1]+ar3[0]].toString()

const output = diagonal1-diagonal2

// maka hasilnya adalah 15 - 12 = 3

const Soal4 = () => {
  console.log(diagonal1)
  return (
    <div>
      {diagonal1}-
      {diagonal2}={output}
    </div>
  );
};

export default Soal4;

