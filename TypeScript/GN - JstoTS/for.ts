// Tipagem correta: deixar o TS inferir ou anotar como `number`.
// `let i: 0` define o tipo literal 0, o que impede `i++`.
for (let i: number = 1; i <= 10; i++) {
    let n: number = 2;
    console.log(`${n}x${i}=${n*i}`);
}