import React from "react";

//Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan
//berapa kali kata dalam QUERY terdapat pada array INPUT
const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];
//outputnya : [1,0,2]
//karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT,
//dan kata 'dz' terdapat 2 pada INPUT

// const output = input.join(',').match(/[a-z]/g)
const bbb = input.filter((obj) => query[0].indexOf(obj) !== -1);
const ac = input.filter((obj) => query[1].indexOf(obj) !== -1);
const dz = input.filter((obj) => query[2].indexOf(obj) !== -1);
const output1 = bbb;
const output2 = ac;
const output3 = dz;

// const output = input.filter(function (obj) {
//   return query.indexOf(obj) !== -1;
// });

// const bbb = query[0];
// const ac = query[1];
// const dz = query[2];

// const matched = [];
// for (let index = 0; index < query.length; index++) {
//   for (let outerIndex = 0; outerIndex < input.length; outerIndex++) {
//     if (query[index].includes(input[outerIndex])) {
//       matched.push(input[outerIndex]);
//     }
//   }
// }

const Soal3 = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="output">
          <h2>[{`${output1.length},${output2.length},${output3.length}`}]</h2>
          <h2>query : {query.join(",")}</h2>
        </div>
        <input type="text" placeholder={input} />
      </div>
    </div>
  );
};

export default Soal3;
