function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = '';
    
        for (let j = 1; j <= rows + i - 1; j++) {
            if (j <= rows - i) {
                stars += ' ';
            } else {
                stars += '*';
            }
        }
        
        console.log(stars);
    }
}
printPyramid(5);
