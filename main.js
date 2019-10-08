// UNTUK SESI TANGGAL

let tanggalA = 0;
let tanggalB = 0;
let tanggalC = 0;
let tanggalD = 0;
let tanggalE = 0;
let countTanggal = 0;

const button1TanggalYa = () => {
  tanggalA = 1;
  document.getElementById("tanggal1").remove();
  document.getElementById("tanggal2").style.display = "block";
};
const button1TanggalTidak = () => {
  tanggalA = 0;
  document.getElementById("tanggal1").remove();
  document.getElementById("tanggal2").style.display = "block";
};

const button2TanggalYa = () => {
  tanggalB = 2;
  document.getElementById("tanggal2").remove();
  document.getElementById("tanggal3").style.display = "block";
};
const button2TanggalTidak = () => {
  tanggalB = 0;
  document.getElementById("tanggal2").remove();
  document.getElementById("tanggal3").style.display = "block";
};

const button3TanggalYa = () => {
  tanggalC = 4;
  document.getElementById("tanggal3").remove();
  document.getElementById("tanggal4").style.display = "block";
};
const button3TanggalTidak = () => {
  tanggalC = 0;
  document.getElementById("tanggal3").remove();
  document.getElementById("tanggal4").style.display = "block";
};

const button4TanggalYa = () => {
  tanggalD = 8;
  document.getElementById("tanggal4").remove();
  document.getElementById("tanggal5").style.display = "block";
};
const button4TanggalTidak = () => {
  tanggalD = 0;
  document.getElementById("tanggal4").remove();
  document.getElementById("tanggal5").style.display = "block";
};

const button5TanggalYa = () => {
  tanggalE = 16;
  countTanggal = parseFloat(
    tanggalA + tanggalB + tanggalC + tanggalD + tanggalE
  );
  document.getElementById("tanggal5").remove();
  document.getElementById("Date").innerHTML = "bulan";
  document.getElementById("bulan1").style.display = "block";
};
const button5TanggalTidak = () => {
  tanggalE = 0;
  countTanggal = parseFloat(
    tanggalA + tanggalB + tanggalC + tanggalD + tanggalE
  );
  document.getElementById("tanggal5").remove();
  document.getElementById("Date").innerHTML = "bulan";
  document.getElementById("bulan1").style.display = "block";
};

// UNTUK SESI BULAN

let bulanA = 0;
let bulanB = 0;
let bulanC = 0;
let bulanD = 0;
let countBulan = 0;

const namaBulan = () => {
  switch (countBulan) {
    case 0:
      countBulan = "Bukan Bulan :(";
      break;
    case 1:
      countBulan = "Januari";
      break;
    case 2:
      countBulan = "Februari";
      break;
    case 3:
      countBulan = "Maret";
      break;
    case 4:
      countBulan = "April";
      break;
    case 5:
      countBulan = "Mei";
      break;
    case 6:
      countBulan = "Juni";
      break;
    case 7:
      countBulan = "Juli";
      break;
    case 8:
      countBulan = "Agustus";
      break;
    case 9:
      countBulan = "September";
      break;
    case 10:
      countBulan = "Oktober";
      break;
    case 11:
      countBulan = "November";
      break;
    case 12:
      countBulan = "Desember";
      break;
      default:
        countBulan = '"Maaf, Bulan yang dimaksud tidak ada"'
  }
};

const button1BulanYa = () => {
  bulanA = 1;
  document.getElementById("bulan1").remove();
  document.getElementById("bulan2").style.display = "block";
};
const button1BulanTidak = () => {
  bulanA = 0;
  document.getElementById("bulan1").remove();
  document.getElementById("bulan2").style.display = "block";
};

const button2BulanYa = () => {
  bulanB = 2;
  document.getElementById("bulan2").remove();
  document.getElementById("bulan3").style.display = "block";
};
const button2BulanTidak = () => {
  bulanB = 0;
  document.getElementById("bulan2").remove();
  document.getElementById("bulan3").style.display = "block";
};

const button3BulanYa = () => {
  bulanC = 4;
  document.getElementById("bulan3").remove();
  document.getElementById("bulan4").style.display = "block";
};
const button3BulanTidak = () => {
  bulanC = 0;
  document.getElementById("bulan3").remove();
  document.getElementById("bulan4").style.display = "block";
};

const button4BulanYa = () => {
  bulanD = 8;
  countBulan = parseFloat(bulanA + bulanB + bulanC + bulanD);
  namaBulan();
  document.getElementById("bulan4").remove();
  document.getElementById("tahun1").style.display = "block";
  document.getElementById("Date").innerHTML =
    "2 angka <b>PERTAMA</b> dari tahun";
};
const button4BulanTidak = () => {
  bulanD = 0;
  countBulan = parseFloat(bulanA + bulanB + bulanC + bulanD);
  namaBulan();
  document.getElementById("bulan4").remove();
  document.getElementById("tahun1").style.display = "block";
  document.getElementById("Date").innerHTML =
    "2 angka <b>PERTAMA</b> dari tahun";
};

// UNTUK SESI TAHUN 2 ANGKA PERTAMA

let tahunA = 0;
let tahunB = 0;
let tahunC = 0;
let tahunD = 0;
let tahunE = 0;
let tahunF = 0;
let tahunG = 0;
let countTahun = 0;

const button1TahunYa = () => {
  tahunA = 1;
  document.getElementById("tahun1").remove();
  document.getElementById("tahun2").style.display = "block";
};
const button1TahunTidak = () => {
  tahunA = 0;
  document.getElementById("tahun1").remove();
  document.getElementById("tahun2").style.display = "block";
};

const button2TahunYa = () => {
  tahunB = 2;
  document.getElementById("tahun2").remove();
  document.getElementById("tahun3").style.display = "block";
};
const button2TahunTidak = () => {
  tahunB = 0;
  document.getElementById("tahun2").remove();
  document.getElementById("tahun3").style.display = "block";
};

const button3TahunYa = () => {
  tahunC = 4;
  document.getElementById("tahun3").remove();
  document.getElementById("tahun4").style.display = "block";
};
const button3TahunTidak = () => {
  tahunC = 0;
  document.getElementById("tahun3").remove();
  document.getElementById("tahun4").style.display = "block";
};

const button4TahunYa = () => {
  tahunD = 8;
  document.getElementById("tahun4").remove();
  document.getElementById("tahun5").style.display = "block";
};
const button4TahunTidak = () => {
  tahunD = 0;
  document.getElementById("tahun4").remove();
  document.getElementById("tahun5").style.display = "block";
};

const button5TahunYa = () => {
  tahunE = 16;
  document.getElementById("tahun5").remove();
  document.getElementById("tahun6").style.display = "block";
};
const button5TahunTidak = () => {
  tahunE = 0;
  document.getElementById("tahun5").remove();
  document.getElementById("tahun6").style.display = "block";
};

const button6TahunYa = () => {
  tahunF = 32;
  document.getElementById("tahun6").remove();
  document.getElementById("tahun7").style.display = "block";
};
const button6TahunTidak = () => {
  tahunF = 0;
  document.getElementById("tahun6").remove();
  document.getElementById("tahun7").style.display = "block";
};

const button7TahunYa = () => {
  tahunG = 64;
  countTahun = parseFloat(
    tahunA + tahunB + tahunC + tahunD + tahunE + tahunF + tahunG
  );
  document.getElementById("tahun1-2").style.display = "block";
  document.getElementById("tahun7").remove();
  document.getElementById("Date").innerHTML =
    "2 angka <b>TERAKHIR</b> dari tahun";
};
const button7TahunTidak = () => {
  tahunG = 0;
  countTahun = parseFloat(
    tahunA + tahunB + tahunC + tahunD + tahunE + tahunF + tahunG
  );
  document.getElementById("tahun1-2").style.display = "block";
  document.getElementById("tahun7").remove();
  document.getElementById("Date").innerHTML =
    "2 angka <b>TERAKHIR</b> dari tahun";
};

// UNTUK SESI TAHUN 2 ANGKA TERAKHIR

// UNTUK MEMBEDAKAN ANGKA TAHUN PERTAMA DAN TERAKHIR MAKA DISETIAP AKHIR VARIABEL ATAU FUNGSI YANG MIRIP
// DIBERI TAMBAHAN KARAKTER 2 ATAU -2

let tahunA2 = 0;
let tahunB2 = 0;
let tahunC2 = 0;
let tahunD2 = 0;
let tahunE2 = 0;
let tahunF2 = 0;
let tahunG2 = 0;
let countTahun2 = 0;
let fixCountTahun = 0;

const toDoubleZero = () => {
  switch (countTahun2) {
    case 0:
      countTahun2 = "00";
      break;
    case 1:
      countTahun2 = "01";
      break;
    case 2:
      countTahun2 = "02";
      break;
    case 3:
      countTahun2 = "03";
      break;
    case 4:
      countTahun2 = "04";
      break;
    case 5:
      countTahun2 = "05";
      break;
    case 6:
      countTahun2 = "06";
      break;
    case 7:
      countTahun2 = "07";
      break;
    case 8:
      countTahun2 = "08";
      break;
    case 9:
      countTahun2 = "09";
      break;
  }
};

const gabungTahun = () => {
  fixCountTahun = countTahun.toString() + countTahun2.toString();
  if (typeof countTahun2 == String) {
    fixCountTahun = countTahun.toString() + countTahun2;
  } else {
    fixCountTahun = countTahun.toString() + countTahun2.toString();
  }
};

const button1TahunYa2 = () => {
  tahunA2 = 1;
  document.getElementById("tahun1-2").remove();
  document.getElementById("tahun2-2").style.display = "block";
};
const button1TahunTidak2 = () => {
  tahunA2 = 0;
  document.getElementById("tahun1-2").remove();
  document.getElementById("tahun2-2").style.display = "block";
};

const button2TahunYa2 = () => {
  tahunB2 = 2;
  document.getElementById("tahun2-2").remove();
  document.getElementById("tahun3-2").style.display = "block";
};
const button2TahunTidak2 = () => {
  tahunB2 = 0;
  document.getElementById("tahun2-2").remove();
  document.getElementById("tahun3-2").style.display = "block";
};

const button3TahunYa2 = () => {
  tahunC2 = 4;
  document.getElementById("tahun3-2").remove();
  document.getElementById("tahun4-2").style.display = "block";
};
const button3TahunTidak2 = () => {
  tahunC2 = 0;
  document.getElementById("tahun3-2").remove();
  document.getElementById("tahun4-2").style.display = "block";
};

const button4TahunYa2 = () => {
  tahunD2 = 8;
  document.getElementById("tahun4-2").remove();
  document.getElementById("tahun5-2").style.display = "block";
};
const button4TahunTidak2 = () => {
  tahunD2 = 0;
  document.getElementById("tahun4-2").remove();
  document.getElementById("tahun5-2").style.display = "block";
};

const button5TahunYa2 = () => {
  tahunE2 = 16;
  document.getElementById("tahun5-2").remove();
  document.getElementById("tahun6-2").style.display = "block";
};
const button5TahunTidak2 = () => {
  tahunE2 = 0;
  document.getElementById("tahun5-2").remove();
  document.getElementById("tahun6-2").style.display = "block";
};

const button6TahunYa2 = () => {
  tahunF2 = 32;
  document.getElementById("tahun6-2").remove();
  document.getElementById("tahun7-2").style.display = "block";
};
const button6TahunTidak2 = () => {
  tahunF2 = 0;
  document.getElementById("tahun6-2").remove();
  document.getElementById("tahun7-2").style.display = "block";
};

const button7TahunYa2 = () => {
  tahunG2 = 64;
  countTahun2 = parseFloat(
    tahunA2 + tahunB2 + tahunC2 + tahunD2 + tahunE2 + tahunF2 + tahunG2
  );
  toDoubleZero();
  gabungTahun();
  document.getElementById("tahun7-2").remove();
  document.getElementById("submit").style.display = "inline-block"
};
const button7TahunTidak2 = () => {
  tahunG2 = 0;
  countTahun2 = parseFloat(
    tahunA2 + tahunB2 + tahunC2 + tahunD2 + tahunE2 + tahunF2 + tahunG2
  );
  toDoubleZero();
  gabungTahun();
  document.getElementById("tahun7-2").remove();
  document.getElementById("submit").style.display = "inline-block"
};

const onSubmit = () => {
  const count = countTanggal;
  const hasil =
    "Tanggal lahir kamu adalah " +
    countTanggal +
    " " +
    countBulan +
    " " +
    fixCountTahun;
  const getIdQuestion = (document.getElementById("question").innerHTML = hasil);
  if (count > 0) {
    getIdQuestion;
  } else if (count == 0) {
    alert("tidak ada yang dipilih");
  }
};
