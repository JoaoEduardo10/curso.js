let valores = [8, 1, 7, 4, 2, 9]

let pos = valores.indexOf(10)
console.log(pos)
if (pos == -1) {
    pos = valores.push(8)
    console.log(`O novo valor é ${pos}`)
} else {
    console.log(`valor e ${pos}`)
}
