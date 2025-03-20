function character(person: string): void {
    if (person === 'Cix') {
        console.log('Cix is here');
    } else {
        console.log('No one is here');
    }
}

export default function main(): void {
    character('Cix'); // Exemplo de chamada
}

