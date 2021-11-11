// callback > promise > async/await

// Importando o file system
const fs = require('fs')

// Callback significa que ele chamará a função de volta
// É uma operação assincrona -> i/o
function callback(err, contents) {
    console.log(err, String(contents))
}


// Leia o arquivo e quando ele estiver pronto, chame de volta (callback)
// fs.readFile('./in1.txt', (err, contents) => {
//     fs.readFile('./in2.txt', (err, contents2) => {
// 			console.log(err, String(contents))
//             console.log(err, String(contents2))
// 	})
// })

// Não é legal "crescer para frente" quando pensado sobre a manutenção
// Também há um problema com a ordem de execução
// Priorizar o código a "crescer para baixo"
// Para isso, utiliza-se promises
    // São "promessas" de que você irá trazer aquele resultado num futuro após a execução
    // Dada uma promessa há 2 opções: resolve-la ou rejeita-la
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) { return reject(err) }
        else resolve(contents)
    })
})

// Ao invés do callback, agora temos o then()
// Ele meio que "encadeia a promises"
// const promessa = readFile('./in1.txt')
// 	.then(contents => {
// 		console.log(String(contents))
// 		return readFile('./in2.txt')
// 	})
// 	.then(contents => {
//         console.log(String(contents))
// 		console.log(promessa)
//     })
    
// setTimeout(() => console.log(promessa), 1000)


// Async/Await -> é uma forma melhor de enxergar a promise
// Uma função async é uma promise 
// É uma forma mais fácil de gerenciar uma promise
const init = async () => {
    try {
        const contents = await readFile('./in1.txt')
        // console.log(String(contents))
        const contents2 = await readFile('./in2.txt')
        // console.log(String(contents2))
        return String(contents) + String(contents2)
    } catch (err) {
        console.log(err)
    }  
}

init().then((contents) => {console.log(contents)})