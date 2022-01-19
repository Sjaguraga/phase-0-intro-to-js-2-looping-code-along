const array = [];
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
    array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    debugger;
  }

    return array;
}

function countDown (int) {
    let i = 11;
    while (i > 0) {
        console.log(--i);
    }
}
