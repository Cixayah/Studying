function table(numb: number = 1): void {
    for (let i: number = 1; i <= 10; i++) {
        console.log(`${numb} x ${i} = ${numb * i} `)
    }
}
table(9)