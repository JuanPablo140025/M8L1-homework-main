// services/loot.service.js

// calcularValorInventario(items)
// Recibe un array de items, cada uno con un campo "precio".
// Debe devolver la suma de todos los precios.
const calcularValorInventario = (items) => {
    let total = items.reduce((acumulador, item) => acumulador + item.precio, 0);
    return total;
};

// obtenerItemMasRaro(items)
// Recibe un array de items, cada uno con "nombre" y "rareza".
// Debe devolver el objeto del item con la RAREZA MÁS ALTA.
const obtenerItemMasRaro = (items) => {
    let masRaro = items[0];

    for (let i = 1; i < items.length; i++) {
        if (items[i].rareza > masRaro.rareza) {
            masRaro = items[i];
        }
    }

    return masRaro;
};

// contarItemsLegendarios(items)
// Recibe un array de items y devuelve cuántos son de tipo "legendario".
const contarItemsLegendarios = (items) => {
    let contador = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].tipo === "legendario") {
            contador = contador + 1;
        }
    }

    return contador;
};

// calcularDropRatePromedio(intentos)
// Si el array está vacío, devuelve 0.
const calcularDropRatePromedio = (intentos) => {
    if (intentos.length === 0) {
        return 0;
    }
    let exitosos = intentos.filter((intento) => intento.obtuvoDrop).length;
    return (exitosos / intentos.length) * 100;
};

// ordenarInventarioPorValor(items)
// Devuelve un array NUEVO sin modificar el array original.
const ordenarInventarioPorValor = (items) => {
    return [...items].sort((a, b) => b.precio - a.precio);
};

module.exports = {
    calcularValorInventario,
    obtenerItemMasRaro,
    contarItemsLegendarios,
    calcularDropRatePromedio,
    ordenarInventarioPorValor
};