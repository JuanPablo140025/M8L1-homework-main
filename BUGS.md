# Reporte de Incidentes — LootVault

Completa una entrada por cada ticket que resolviste. Tres líneas, directo al grano.

---

## Ticket 1 → Reporte #4471

**Reportado:** El total de monedas devueltas al vender todo el inventario no coincide con el cálculo manual.
**Encontrado:** La función intentaba sumar la propiedad inexistente `item.valor` en lugar de `item.precio`.
**Corregido:** Se actualizó la referencia dentro del método `reduce` a `item.precio`.

---

## Ticket 2 → Reporte #4483

**Reportado:** El sistema cataloga como ítem más raro objetos comunes de baja rareza como pociones.
**Encontrado:** La condición dentro del bucle utilizaba el operador `<` en vez de `>`, guardando el ítem de menor rareza.
**Corregido:** Se corrigió el condicional a `items[i].rareza > masRaro.rareza`.

---

## Ticket 3 → Reporte #4502

**Reportado:** El conteo de ítems legendarios congela la aplicación y devuelve un resultado erróneo.
**Encontrado:** El ciclo usaba `<=` en la condición del límite, desbordando el array al evaluar un índice `undefined`.
**Corregido:** Se modificó la condición límite a `i < items.length`.

---

## Ticket 4 → Reporte #4519

**Reportado:** Consultar el drop rate promedio de monstruos sin historial de intentos arroja un error.
**Encontrado:** Al pasar un array vacío, realizaba una división entre cero (`0 / 0`), devolviendo `NaN`.
**Corregido:** Se agregó una cláusula de guarda inicial que retorna `0` si `intentos.length === 0`.

---

## 💎 Ticket Bonus (si lo resolviste)

**Encontrado:** El método `.sort()` ordenaba el array modificando directamente la referencia del array original ingresado como parámetro.
**Corregido:** Se implementó una copia del array utilizando la sintaxis spread `[...items].sort(...)` antes de realizar el ordenamiento.