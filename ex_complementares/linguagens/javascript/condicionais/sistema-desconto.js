const valorCompra = 180;
const clientePremium = false;
const nomeCliente = "Sara";

console.log("Nome do Cliente:", nomeCliente || "Visitante");

console.log ("Tem desconto?", valorCompra >= 200 || clientePremium);

console.log ("Não é cliente premium?", !clientePremium);

