// 1chi masala
// const students = [
//     { ism: "Ali", yoshi: 20, baxolari: [90, 85, 88] },
//     { ism: "Vali", yoshi: 21, baxolari: [85, 87, 90] },
//     { ism: "Sami", yoshi: 22, baxolari: [88, 92, 84] },
// ];
// function engYaxshiTalaba(students) {
//     let engYaxshiTalaba = students[0];
//     let engYaxshiOrtacha = ortachaBaholari(students[0].baxolari);
//     for (let i = 1; i < students.length; i++) {
//         let talaba = students[i];
//         let talabaOrtacha = ortachaBaholari(talaba.baxolari);
//         if (talabaOrtacha > engYaxshiOrtacha) {
//             engYaxshiTalaba = talaba;
//         engYaxshiOrtacha = talabaOrtacha;
//         }
//     }
//     return engYaxshiTalaba.ism;
// }
// function ortachaBaholari(baholar) {
// let jami = baholar.reduce((sum, baho) => sum + baho, 0);
// return jami / baholar.length;
//   }
// console.log(engYaxshiTalaba(students)); 


// 2chi masala
// const products = [
//     { nom: "Kompyuter", narxi: 1000, mavjud: true },
//     { nom: "Telefon", narxi: 700, mavjud: false },
//     { nom: "Planshet", narxi: 500, mavjud: true },
//     { nom: "Monitor", narxi: 300, mavjud: true },
//   ];
//   function engQimmatMahsulot(products) {
//     let mavjudMahsulotlar = products.filter(product => product.mavjud);
//     let engQimmatMahsulot = mavjudMahsulotlar[0];
  
//     for (let i = 1; i < mavjudMahsulotlar.length; i++) {
//       let mahsulot = mavjudMahsulotlar[i];
//       if (mahsulot.narxi > engQimmatMahsulot.narxi) {
//         engQimmatMahsulot = mahsulot;
//       }
//     }
//     return engQimmatMahsulot.nom;
//   }
//   console.log(engQimmatMahsulot(products));