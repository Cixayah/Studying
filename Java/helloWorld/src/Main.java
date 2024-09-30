import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Coletar dados do usuário
        System.out.print("Digite seu peso (kg): ");
        double peso = scanner.nextDouble();

        System.out.print("Digite sua altura (m): ");
        double altura = scanner.nextDouble();

        System.out.print("Digite sua idade (anos): ");
        int idade = scanner.nextInt();

        System.out.print("Digite seu sexo (M para masculino, F para feminino): ");
        char sexo = scanner.next().charAt(0);

        // Calcular o IMC
        double imc = calcularIMC(peso, altura);
        System.out.printf("Seu IMC é: %.2f\n", imc);

        // Calcular a TMB com base no sexo
        double tmb = calcularTMB(peso, altura, idade, sexo);
        if (tmb != -1) {
            System.out.printf("Sua TMB é: %.2f calorias/dia\n", tmb);
        } else {
            System.out.println("Sexo inválido. Não foi possível calcular a TMB.");
        }

        scanner.close();
    }

    // Função para calcular o IMC
    public static double calcularIMC(double peso, double altura) {
        return peso / (altura * altura);
    }

    // Função para calcular a TMB
    public static double calcularTMB(double peso, double altura, int idade, char sexo) {
        if (sexo == 'M' || sexo == 'm') {
            // Fórmula para homens
            return 88.36 + (13.4 * peso) + (4.8 * altura * 100) - (5.7 * idade); // altura convertida para cm
        } else if (sexo == 'F' || sexo == 'f') {
            // Fórmula para mulheres
            return 447.6 + (9.2 * peso) + (3.1 * altura * 100) - (4.3 * idade); // altura convertida para cm
        } else {
            return -1; // Retorna -1 para indicar sexo inválido
        }
    }
}
