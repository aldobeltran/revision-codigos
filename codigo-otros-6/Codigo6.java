package revisionCodigo6;

import java.util.Scanner;

//Aldo Beltran
//Me falto velocidad y acomodo en las clases

public class Codigo6{
	
	public static void main(String [] agrs) {
		  
    int n []  = new int[20]; //le faltaba el new

    for (int i = 0; i < 20; i++) { //le falta el simbolo de incremento
      n[i] = (int)(Math.random() * 381) + 20;
      System.out.print( n[i] + " ");
    }
    
    System.out.print("\n¿Qué números quiere resaltar? \nopción 1 – los múltiplos de 5 \nopción 2 – los múltiplos de 7 : "); //se cambio por mejor leegibilidad
    
    Scanner scanner = new Scanner(System.in); //Cambiar e inicializar scanner 
    int opcion = scanner.nextInt();
    
    int multiplo = (opcion == 1) ? 5 : 7;

    for (int e : n ) {//ciclo for
      if (e % multiplo == 0) {
        System.out.print("[" + e + "] ");
      }else {
        System.out.print(e + " ");
       }
    }
    scanner.close();//se cierra el scanner
	}}
	 
