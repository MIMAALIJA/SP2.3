const kopi = {
  nama: "expreso",
  kualitas: "premium",
  harga: 156.0,
  getkoffe: function () {
    return (
      "nama: " +
      this.nama +
      " | kualitas: " +
      this.kualitas +
      "| harga:" +
      this.harga
    );
  },
};
console.log(kopi); // { jenis: "kopi" }

const makanan = {
  masakan: "padang",
  lauk: "rendang,ayam bakar,kikil",
  paket: 15.0,
  getkenyang: function () {
    return (
      "masakan: " +
      this.masakan +
      " | lauk: " +
      this.lauk +
      "| paket:" +
      this.paket
    );
  },
};
console.log(makanan); // { jenis: "makanan" }

const baju = {
  jenis: "kaos",
  bahan: "kavan premium",
  harga: 10.0,
  getpakaian: function () {
    return (
      "jenis: " +
      this.jenis +
      " | bahan: " +
      this.bahan +
      "| harga:" +
      this.harga
    );
  },
};
console.log(baju); // { jenis: "pakaian" }

const komik = {
  nama: "maga shou osab",
  gentre: "isekai,komedi,action",
  rating: 4.5,
  getkoffe: function () {
    return (
      "nama: " +
      this.nama +
      " | gentre: " +
      this.gentre +
      "| rating:" +
      this.rating
    );
  },
};
console.log(komik); // { jenis: "magga" }

const handphone = {
  nama: "xiomi",
  kualitas: "mid range",
  harga: 156.0,
  getkoffe: function () {
    return (
      "nama: " +
      this.nama +
      " | kualitas: " +
      this.kualitas +
      "| harga:" +
      this.harga
    );
  },
};
console.log(handphone); // { jenis: "hp" }
