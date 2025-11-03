"use strict";
let students = [];
function addStudent(name, ...grades) {
    const student = { name, grades };
    students.push(student);
    console.log(`✅ Aluno ${name} adicionado com sucesso!`);
}
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}
function determineStatus(average) {
    if (average >= 7) {
        return "Aprovado";
    }
    else if (average >= 5) {
        return "Recuperação";
    }
    else {
        return "Reprovado";
    }
}
function displayReport() {
    console.log("\n📊 === BOLETIM ESCOLAR ===\n");
    students.forEach((student, index) => {
        const average = calculateAverage(student.grades);
        const status = determineStatus(average);
        console.log(`${index + 1}. ${student.name}`);
        console.log(`   Notas: ${student.grades.join(", ")}`);
        console.log(`   Média: ${average.toFixed(2)}`);
        console.log(`   Situação: ${status}\n`);
    });
}
function searchStudent(name) {
    return students.find(student => student.name.toLowerCase() === name.toLowerCase());
}
function showStatistics() {
    const allAverages = students.map(student => calculateAverage(student.grades));
    const highestAverage = Math.max(...allAverages);
    const lowestAverage = Math.min(...allAverages);
    const generalAverage = allAverages.reduce((acc, average) => acc + average, 0) / allAverages.length;
    const approved = students.filter(student => calculateAverage(student.grades) >= 7).length;
    const failed = students.filter(student => calculateAverage(student.grades) < 5).length;
    console.log("\n📈 === ESTATÍSTICAS DA TURMA ===\n");
    console.log(`Total de alunos: ${students.length}`);
    console.log(`Aprovados: ${approved}`);
    console.log(`Reprovados: ${failed}`);
    console.log(`Maior média: ${highestAverage.toFixed(2)}`);
    console.log(`Menor média: ${lowestAverage.toFixed(2)}`);
    console.log(`Média geral: ${generalAverage.toFixed(2)}`);
}
console.log("🎓 Sistema de Gerenciamento Escolar\n");
addStudent("João Silva", 8.5, 7.0, 9.0, 6.5);
addStudent("Maria Santos", 9.0, 8.5, 10.0, 9.5);
addStudent("Pedro Oliveira", 5.0, 6.0, 4.5, 5.5);
addStudent("Ana Costa", 3.0, 4.0, 3.5, 2.5);
displayReport();
const foundStudent = searchStudent("Maria Santos");
if (foundStudent) {
    console.log(`\n🔍 Aluno encontrado: ${foundStudent.name}`);
    console.log(`Média: ${calculateAverage(foundStudent.grades).toFixed(2)}`);
}
showStatistics();
