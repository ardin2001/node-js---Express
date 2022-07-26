const fs = require('fs');

//menuliskan file secara synchronous
// try{
//     fs.writeFileSync('./data/coba.txt','hello world!');
// }catch(e){
//     console.log('error')
//     console.log(e)
// }

//menuliskan file secara asynchronous
// fs.writeFile('./data/coba.txt','hello ini writefile secara asynchronous',e => {
//     console.log(e);
// })

// fs.readFile('coba.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('masukkan nama anda : ', nama => {
    rl.question('masukkan nim : ',nim => {
        fs.writeFile('coba.json',`[{"nama" : "${nama}" ,"nim" : ${nim}}]`,e => {
            console.log(e);
        });
        rl.close();
    })
});

// fs.readFile('coba.json', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });