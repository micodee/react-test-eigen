import React from 'react'

//Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
//const sentence = "Saya sangat senang mengerjakan soal algoritma"
// mengerjakan: 11 character

const sentence = "Saya sangat senang mengerjakan soal algoritma"
//menyortir kata terpanjang
    const strArray = sentence.split(' ');
    const sortedStrArray = strArray.sort(
        (strA, strB) => {
            return strB.length - strA.length;
        }
    )

const Soal2 = () => {
  return (
    <div>{sortedStrArray}</div>
  )
}

export default Soal2