import React from "react";

//Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
//const sentence = "Saya sangat senang mengerjakan soal algoritma"
// mengerjakan: 11 character

const sentence = "Saya sangat senang mengerjakan soal algoritma";

const longestWord = (sentence) => {
  //menyortir kata terpanjang
  const strArray = sentence.split(" ");
  const sortedStrArray = strArray.sort((strA, strB) => {
    return strB.length - strA.length;
  });
  return sortedStrArray[0];
};

const count = longestWord(sentence).split("").length;

const Soal2 = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="output">
          <h2>{longestWord(sentence)}: {count} character.</h2>
        </div>
          <input type="text" placeholder={sentence} />
      </div>
    </div>
  );
};

export default Soal2;
