import React from 'react'

// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

//cara 1 replace
const string = "NEGIE1"
const replace = string.replace("NEGIE", "EIGEN");
//cara 2 reverse
const array = string.split('').reverse().join('').slice(1);
const reverse = array+"1";


const Soal1 = () => {
  return (
    <div>
        <h1>{replace}</h1>
        <h1>{reverse}</h1>
    </div>
  )
}

export default Soal1