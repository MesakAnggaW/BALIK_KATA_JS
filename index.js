function balikKata(kata) {
    let arr = [];
    for (let i = 0; i < kata.length; i++) {
        arr.unshift(kata[i]);
    }

    return arr.toString().replace(/,/g, "");
}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));