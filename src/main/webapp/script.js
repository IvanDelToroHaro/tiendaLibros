function agregarLibro() {
	let libro = document.getElementById("seleccionable").value
	let cantidad = document.getElementById("cantidad").value
	let saldo = document.getElementById("saldo").innerText

	if (document.getElementById("saldo").innerHTML <= 0) {
		alert("No le queda saldo")
	} else {
		switch (libro) {
			case "1":
				if (cantidad >= 0) {
					document.getElementById("lista").innerHTML += ("<li> Usted a comprado " + cantidad + " libros  de Don Quijote</li>");
					document.getElementById("saldo").innerHTML = Number(saldo) - (15 * Number(cantidad))
				} else {
					alert("No ha elegido una cantidad valida")
				}
				break;
			case "2":
				if (cantidad >= 0) {
					document.getElementById("lista").innerHTML += ("<li> Usted a comprado " + cantidad + " libros de  Geronimo Stilton</li>");
					document.getElementById("saldo").innerHTML = Number(saldo) - (5 * Number(cantidad))
				} else {
					alert("No ha elegido una cantidad valida")
				}
				break;
			case "3":
				if (cantidad >= 0) {
					document.getElementById("lista").innerHTML += ("<li> Usted a comprado " + cantidad + " libros de 3 Mosqueteros</li>");
					document.getElementById("saldo").innerHTML = Number(saldo) - (20 * Number(cantidad))
				} else {
					alert("No ha elegido una cantidad valida")
				}
				break;
			case "4":
				if (cantidad >= 0) {
					document.getElementById("lista").innerHTML += ("<li> Usted a comprado " + cantidad + " libros de El señor de los anillos</li>");
					document.getElementById("saldo").innerHTML = Number(saldo) - (25 * Number(cantidad))
				} else {
					alert("No ha elegido una cantidad valida")
				}
				break;
			case "5":
				if (cantidad >= 0) {
					document.getElementById("lista").innerHTML += ("<li> Usted a comprado " + cantidad + " libros de El hobbit</li>");
					document.getElementById("saldo").innerHTML = Number(saldo) - (10 * Number(cantidad))
				} else {
					alert("No ha elegido una cantidad valida")
				}
				break;
		}
	}
}