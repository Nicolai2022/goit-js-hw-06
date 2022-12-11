const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
// console.table(cart);

for (let i = 0; i < cart.length; i += 1) {
    console.log (cart [i]);

    total += cart [i];
}

console.log ('Total: ',total);