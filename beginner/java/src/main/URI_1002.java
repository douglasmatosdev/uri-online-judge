package main;

import java.util.Locale;
import java.util.Scanner;

public class URI_1002 {

	public static void main(String args[]) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in); // 150.00

		double PI = 3.14159;
		double r = sc.nextDouble();
		double a = PI * (r * r);
		
		System.out.printf("A=%.4f%n", a);
		
		sc.close();
	}
}
