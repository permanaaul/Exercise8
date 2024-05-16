function soal2(param) {
    let result = [];
    let mid = Math.ceil(param.length / 2);

    for (let i = 0; i < mid; i++) {
        let pair = [param[i]];
        if (param.length % 2 !== 0 && i === mid - 1) {
            pair.push("Instruktur");
        } else {
            pair.push(param[param.length - 1 - i]);
        }
        result.push(pair);
    }

    return result;
}

console.log(soal2(['Aries', 'Dimas', 'Gatot', "Nurmantyo", "Zainul", "Majdi"]));
console.log(soal2(['A', 'B', 'C', 'D', 'E']));
console.log(soal2(['Susan', 'Albert', 'Erithiana', 'Zaki', 'Sisijoan', 'Henry', "Nio"]));
