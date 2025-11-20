function agregarLibro() {
	let libro = document.getElementById("seleccionable").value;
	let cantidad = document.getElementById("cantidad").value;
	let saldo = Number(document.getElementById("saldo").innerText); // Convertir a número una vez

	// Verificar si se seleccionó un libro y cantidad es válida
	if (!libro || cantidad <= 0) {
		alert("Seleccione un libro y una cantidad válida (mayor a 0)");
		return;
	}

	let precio = 0;
	let nombreLibro = "";

	switch (libro) {
		case "1":
			precio = 15;
			nombreLibro = "Don Quijote";
			break;
		case "2":
			precio = 5;
			nombreLibro = "Geronimo Stilton";
			break;
		case "3":
			precio = 20;
			nombreLibro = "3 Mosqueteros";
			break;
		case "4":
			precio = 25;
			nombreLibro = "El señor de los anillos";
			break;
		case "5":
			precio = 10;
			nombreLibro = "El hobbit";
			break;
	}

	let costoTotal = precio * Number(cantidad);

	// Verificar si hay suficiente saldo
	if (saldo < costoTotal) {
		alert("Saldo insuficiente. No puede realizar esta compra.");
		return;
	}

	// Realizar la compra
	document.getElementById("lista").innerHTML += ("<li>Usted ha comprado " + cantidad + " libros de " + nombreLibro + "</li>");
	document.getElementById("saldo").innerHTML = saldo - costoTotal;
}
