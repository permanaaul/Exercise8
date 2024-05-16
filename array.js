function matrix(n) {
    let result = [];
    let value = 1;

    for (let i = 0; i < n; i++) {
        let row = [];

        if (i % 2 === 0) {
            for (let j = 0; j < n; j++) {
                row.push(value);
                value++;
            }
        } else {
            let startValue = value + n - 1;
            for (let j = 0; j < n; j++) {
                row.push(startValue);
                startValue--;
            }
            value += n;
        }

        result.push(row);
    }
    return result;
}

let matrix4x4 = matrix(4);
console.log(matrix4x4);
