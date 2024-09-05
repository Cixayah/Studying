//window.alert("Hello World");
//window.confirm("Are you sure you want to delete this item?");
//let name = window.prompt("What is your name?").toUpperCase();
//let lastname = window.prompt("What is your last name?").toUpperCase();
//alert(name + " " + lastname);
// q = window.prompt('Deseja seguir? Sim ou Não').toLowerCase();

// if (q === 'sim') {
//     let n1 = window.prompt("Enter a number");
//     let n2 = window.prompt("Enter another number");
//     let sum = parseInt(n1) + parseInt(n2);
//     alert("The sum of " + n1 + " and " + n2 + " is " + sum);
// } else {
//     alert('😥')
// }

function confirmDelete() {
    let userResponse = confirm('Really want to delete this item?');
    if (userResponse) {
        alert('Item deleted!');
    } else {
        alert('Action cancelled!');
    }
}
