import React, {useState} from "react";

//Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
//const sentence = "Saya sangat senang mengerjakan soal algoritma"
// mengerjakan: 11 character

const sentence = "Saya sangat senang mengerjakan soal algoritma";

const longestWord = (obj) => {
  //menyortir kata terpanjang
  const strArray = obj.split(" ");
  const sortedStrArray = strArray.sort((A, B) => {
    return B.length - A.length;
  });
  return sortedStrArray[0];
};

// const count = longestWord(sentence).split("").length;

const Soal2 = () => {
  const [name, setCount] = useState(sentence);
  return (
    <div className="container">
      <div className="content">
        <div className="output">
          <h2>{longestWord(name)}: {longestWord(name).split("").length} character.</h2>
        </div>
          <input type="text" placeholder={sentence} onChange={(obj) => setCount(obj.target.value)} />
      </div>
    </div>
  );
};

export default Soal2;
