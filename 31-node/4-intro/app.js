const fs = require('fs')

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         process.kill(1)
//     }
//     console.log(data)
// })

const t = 'Hell'

fs.appendFile('test.txt', t, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        process.kill(1)
    }
    console.log("yay!")
})

