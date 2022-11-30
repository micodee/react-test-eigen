import React from "react";

// Silahkan cari hasil
// dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
const arr1 = matrix[0];
const arr2 = matrix[1];
const arr3 = matrix[2];
const diagonal1 = arr1[0] + arr2[1] + arr3[2];
const ar1 = matrix[0];
const ar2 = matrix[1];
const ar3 = matrix[2];
const diagonal2 = [ar1[2] + ar2[1] + ar3[0]].toString();

const output = diagonal1 - diagonal2;

// maka hasilnya adalah 15 - 12 = 3

const set1 = matrix[0].join(",");
const set2 = matrix[1].join();
const set3 = matrix[2].join(",");
const diagonal1set = set1[0].concat(set2[2]).concat(set3[4]);
const set1D2 = matrix[0].join(",");
const set2D2 = matrix[1].join(",");
const set3D2 = matrix[2].join(",");
const diagonal2set = set1D2[4] + set2D2[2] + set3D2[0];

const Soal4 = () => {
  console.log(diagonal1);
  return (
    <div className="container">
      <div className="content">
        <div className="output">
          <h2>
            {diagonal1}-{diagonal2} = {output}
          </h2>{" "}
          <h2>Diagonal 1 : {diagonal1set}</h2>
          <h2>Diagonal 2 : {diagonal2set}</h2>
        </div>
        <input type="text" placeholder={matrix} />
      </div>
    </div>
  );
};

export default Soal4;
