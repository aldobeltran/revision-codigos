package RevisionCodigo5;
//Aldo Beltran}
//Me faltp velocidad y acomodo en las clases
import java.util.Scanner;

public class RevisionCodigo5 {
	public static void main(String[] args) {//se declara la clase main
		
		System.out.println("Introduzca un número: "); //se acomda el syso
		
		Scanner scanner = new Scanner(System.in);//inicializar con system.in
	    
	    int ni = scanner.nextInt(); //se cambio string por int
	    
	    int c = ni;
	    
	    int afortunado = 1;
	    int noAfortunado = 1;
	    
	    while ( ni > 0) {
			  int digito =  ni % 10;
		      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afortunado++;
		      } else {
				noAfortunado++;
		      }//Cerrar else
			  ni /= 10;
		    }
		    if (afortunado > noAfortunado) {
		      System.out.println("El " + c + " es un número afortunado.");//Agregar t al print
		    } else {
		      System.out.println("El " + c + " no es un número afortunado.");
		    }
		    scanner.close();//Cierre del scanner
		  }
		  
		}

