console.log("hi")

//JS type safe değildir. Başta ne tanımlandıysa o tiple devam eder.
let dolarDun = 9.20
let dolarBugun = 9.30

//let için değişkenler tanımlandıkları kapsam da değerlidir
{
    let dolarDun = 9.20
}

console.log(dolarDun)


const euroDun = 11.2
//euroDun = 11 const ile veri tanımlanıyorsa ona başka bir değer atayamazsın

//array
//isimlendirme -> camelCasing

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")
