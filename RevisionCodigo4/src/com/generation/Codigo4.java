
package com.generation;

import java.util.Scanner;

public class Codigo4 {
	public static void main(String[] args) {
    
   System.out.println("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
   Scanner scanner = new Scanner(System.in);//Se agrego el system in
   String j1 = scanner.nextLine();
    
    
    System.out.println("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
    Scanner s2 = new Scanner(System.in);//Se agrego el system in
    String j2 = s2.nextLine();
    
    
    if (j1.equals(j2)) { // se cambio por .equals
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2 == "tijeras") {
            g = 1;
          }

        case "papel":
          if (j2 == "piedra") {
            g = 1;
          }
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:
      }
      System.out.println("Gana el jugador " + g);
    scanner.close();
    s2.close();
    }
    
    }
	}
  
