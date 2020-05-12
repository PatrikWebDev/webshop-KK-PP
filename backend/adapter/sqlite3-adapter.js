const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./products3.db')



module.exports = class DbAdapter {

  get(sqlString, params) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.get(sqlString, params, (err, result) => {
          if (err) {
            console.log(err)
            reject(err);
            return
          }
          resolve(result)
        })
      })
    })
  }

  all(sqlString, params) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(sqlString, params, (err, results) => {
          if (err) {
            reject(err);
            return
          }
          resolve(results)
        })
      })
    })
  }


  run(sqlString, params) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(sqlString, params, function (err) {
          if (err) {
            reject(err);
            return
          }
          resolve(this.lastID)
        })
      })
    })
  }

}

const data = [
  {
    "id": "1",
    "name": "Xiaomi Mi Note 10",
    "shortSpecs": "Xiaomi Mi Note 10 128GB 6GB RAM Dual",
    "image": "/telefon/xiaomi-mi-10",
    "qty": 7,
    "price": 137850
  },
  {
    "id": "1",
    "name": "Xiaomi Mi Note 10",
    "shortSpecs": "Xiaomi Mi Note 10 128GB 6GB RAM Dual",
    "image": "/telefon/xiaomi-mi-10",
    "qty": 7,
    "price": 137850
  },
  {
    "id": "1",
    "name": "Xiaomi Mi Note 10",
    "shortSpecs": "Xiaomi Mi Note 10 128GB 6GB RAM Dual",
    "image": "/telefon/xiaomi-mi-10",
    "qty": 7,
    "price": 137850
  },
  {
    "id": "1",
    "name": "Xiaomi Mi Note 10",
    "shortSpecs": "Xiaomi Mi Note 10 128GB 6GB RAM Dual",
    "image": "/telefon/xiaomi-mi-10",
    "qty": 7,
    "price": 137850
  },
  {
    "id": "1",
    "name": "Xiaomi Mi Note 10",
    "shortSpecs": "Xiaomi Mi Note 10 128GB 6GB RAM Dual",
    "image": "/telefon/xiaomi-mi-10",
    "qty": 7,
    "price": 137850
  }
]


//   const specs = {
//     szelesseg: "74.2 mm",
//     hosszusag: "157.2 mm",
//     vastagsag: "9.7 mm",
//     megapixel: "108 MPx",
//     rom: "256 GB",
//     processzor: "2.2 GHz"
//   }




// const data = [
//   {
//     "id": "1",
//     "name": "Xiaomi Amazfit GTR",
//     "shortSpecs": "Xiaomi Amazfit GTR 42mm Koral Piros Okosóra, Dobozában, Gyári tartozékaival, 1 év garanciával, 27% áfával",
//     "image": "https://p1.akcdn.net/full/604927377.xiaomi-amazfit-gtr.jpg",
//     "qty": 7,
//     "price": 38970
//   },
//   {
//     "id": "2",
//     "name": "Gorenje RK6193LX4 Hűtőszekrény, hűtőgép",
//     "shortSpecs": "A+++, 154 kWh/év, SN-N-ST-T",
//     "image": "https://p1.akcdn.net/full/496345673.gorenje-rk6193lx4.jpg",
//     "qty": "3",
//     "price": 148900
//   },
//   {
//     "id": "3",
//     "name": "Cremesso Easy Kávéfőző",
//     "shortSpecs": "0.65 l, 1450 W, 3 kg",
//     "image": "https://p1.akcdn.net/full/491163435.cremesso-easy.jpg",
//     "qty": "12",
//     "price": 12900
//   },
//   {
//     "id": "4",
//     "name": "Falken EuroWinter HS01 205/65 R16 95H",
//     "shortSpecs": "Téli gumi, Szelesseg: 205, Magassag: 65, Atmero: R16, Gordulesi zaj: 70dB",
//     "image": "https://p1.akcdn.net/full/464404117.falken-eurowinter-hs01-205-65-r16-95h.jpg",
//     "qty": "6",
//     "price": 12880
//   },
//   {
//     "id": "5",
//     "name": "JBL E25BT",
//     "shortSpecs": "	Vezeték nélküli Fülhallgató, 20 Hz-20000 Hz, 102 dB, 17g",
//     "image": "https://p1.akcdn.net/full/415978489.jbl-e25bt.jpg",
//     "qty": "17",
//     "price": 19800
//   }
// ]


// db.serialize(function () {

//   db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(60), shortSpecs VARCHAR(120), image VARCHAR(100), qty INTEGER, price INTEGER)");

//   for (let i = 0; i < data.length; i++) {
//       db.run("INSERT INTO products (id, name, shortSpecs, image, qty, price) VALUES (?,?,?,?,?,?)", [data[i].id, data[i].name, data[i].shortSpecs, data[i].image, data[i].qty, data[i].price]);
//   }

//   db.run("CREATE TABLE IF NOT EXISTS specs (id INTEGER PRIMARY KEY AUTOINCREMENT, product_id INTEGER, szelesseg VARCHAR(20), hosszusag VARCHAR(20), vastagsag VARCHAR(20), megapixel VARCHAR(20), rom VARCHAR(20), processzor VARCHAR(20))");


//     db.run("INSERT INTO specs (product_id, szelesseg, hosszusag, vastagsag, megapixel, rom, processzor) VALUES (?,?,?,?,?,?,?)", [1, specs.szelesseg, specs.hosszusag, specs.vastagsag, specs.megapixel, specs.rom, specs.processzor]);
//     db.run("INSERT INTO specs (product_id, szelesseg, hosszusag, vastagsag, megapixel, rom, processzor) VALUES (?,?,?,?,?,?,?)", [2, specs.szelesseg, specs.hosszusag, specs.vastagsag, specs.megapixel, specs.rom, specs.processzor]);
//     db.run("INSERT INTO specs (product_id, szelesseg, hosszusag, vastagsag, megapixel, rom, processzor) VALUES (?,?,?,?,?,?,?)", [3, specs.szelesseg, specs.hosszusag, specs.vastagsag, specs.megapixel, specs.rom, specs.processzor]);
//     db.run("INSERT INTO specs (product_id, szelesseg, hosszusag, vastagsag, megapixel, rom, processzor) VALUES (?,?,?,?,?,?,?)", [4, specs.szelesseg, specs.hosszusag, specs.vastagsag, specs.megapixel, specs.rom, specs.processzor]);
//     db.run("INSERT INTO specs (product_id, szelesseg, hosszusag, vastagsag, megapixel, rom, processzor) VALUES (?,?,?,?,?,?,?)", [5, specs.szelesseg, specs.hosszusag, specs.vastagsag, specs.megapixel, specs.rom, specs.processzor]);

//   db.all(`SELECT 
//             products.name, 
//             products.shortSpecs, 
//             products.image, 
//             products.qty, 
//             products.price, 
//             specs.szelesseg, 
//             specs.hosszusag, 
//             specs.vastagsag, 
//             specs.megapixel, 
//             specs.rom, 
//             specs.processzor  
//           FROM 
//             products
//           INNER JOIN
//             specs ON products.id = specs.product_id`, (err, results) => {
//     console.log(results)
//   })
// });