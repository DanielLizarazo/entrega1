const menu = "1.hamburguesa sencilla\n2.hamburguesa doble\n3.papas\n4.gaseosa\n5.Combo 1 (hamburguesa Sencilla + papas + gaseosa)\n6.Combo 2 (hambuguesa doble + papas + gaseosa)\n7.Combo Pareja (2 papas + 2 hamburguesas sencillas + 2 gaseosas)"
const descuento = 0.9;
const papas = 7;
const hamburguesaSencilla = 15;
const hamburguesaDoble = 20;
const gaseosa = 5;
const combo1 = (papas + hamburguesaSencilla)*descuento;//20 con promo
const combo2 = (papas + hamburguesaDoble + gaseosa) * descuento; // 30 con promo
const combo3 = ((papas + hamburguesaSencilla + gaseosa)*2)*descuento;
let total = 0;
let cambio;
let pedirMas;

function operacion(pedido, cantidad) {
    total = (pedido * cantidad)
};

function vueltas(total, dinero) {
    cambio = (dinero - total)
};

 do {
     const pedido = parseInt(prompt("Hola este es nuestro menu, selecciona la opcion\n" + menu + "\nRecuerda que los combos tienen descuento, que quieres pedir"));
       
  
      if (pedido == 1)  {
          const cantidad = parseInt(prompt("Cuantos de estos quieres?"));
          operacion(hamburguesaSencilla, cantidad);
          const dinero = parseInt(prompt("el total es $" + total + "\nCon cuanto pagas? "));
          vueltas(total, dinero);
          if (dinero < total) {
            alert("no te alcanza, vete")
        } else {
            alert("tu cambio es $" + cambio)
        }; 
       
      } else if (pedido == 2) {
          const cantidad = parseInt(prompt("Cuantos de estos quieres?"));
          operacion(hamburguesaDoble, cantidad);
          const dinero = parseInt(prompt("el total es $" + total + "\nCon cuanto pagas? "));
          vueltas(total, dinero);
          if (dinero < total) {
            alert("no te alcanza, vete")
        } else {
            alert("tu cambio es $" + cambio)
        }; 
    
      } else if (pedido == 3){
          const cantidad = parseInt(prompt("Cuantos de estos quieres?"));
          operacion(papas, cantidad);
          const dinero = parseInt(prompt("el total es $" + total + "\nCon cuanto pagas? "));
          vueltas(total, dinero);
          if (dinero < total) {
            alert("no te alcanza, vete")
        } else {
            alert("tu cambio es $" + cambio + "\n Disfruta tu comida :)")
        }; 
       
      } else if (pedido == 4){
          const cantidad = parseInt(prompt("Cuantos de estos quieres?"));
          operacion(gaseosa, cantidad); 
          const dinero = parseInt(prompt("el total es $" + total + "\nCon cuanto pagas? "));
          vueltas(total, dinero);
          if (dinero < total) {
            alert("no te alcanza, vete")
        } else {
            alert("tu cambio es $" + cambio + "\n Disfruta tu comida :)")
        }; 
        
      } else if (pedido == 5){
          const cantidad = parseInt(prompt("Cuantos de estos quieres?"));
          operacion(combo1 , cantidad);
          const dinero = parseInt(prompt("el total es $" + total + "\nCon cuanto pagas? "));
          vueltas(total, dinero);
          if (dinero < total) {
            alert("no te alcanza, vete")
        } else {
            alert("tu cambio es $" + cambio + "\n Disfruta tu comida :)")
        }; 
      
      } else if (pedido == 6){
          const cantidad = parseInt(prompt("Cuantos de estos quieres?"));
          operacion(combo2, cantidad);
          const dinero = parseInt(prompt("el total es $" + total + "\nCon cuanto pagas? "));
          vueltas(total, dinero);
          if (dinero < total) {
            alert("no te alcanza, vete")
        } else {
            alert("tu cambio es $" + cambio + "\n Disfruta tu comida :)")
        }; 
        
      } else if(pedido == 7){
          const cantidad = parseInt(prompt("Cuantos de estos quieres?"));
          operacion(combo3, cantidad);
          const dinero = parseInt(prompt("el total es $" + total + "\nCon cuanto pagas? "));
          vueltas(total, dinero);
          if (dinero < total) {
            alert("no te alcanza, vete")
        } else {
            alert("tu cambio es $" + cambio + "\n Disfruta tu comida :)")
        }; 
        } else if (pedido > 8 || pedido == isNaN) {
            alert("elige una opcion valida")
        };

      pedirMas = confirm("quieres otra cosa?")
     } while (pedirMas);


  
