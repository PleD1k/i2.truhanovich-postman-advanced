function logger1(level = 'info', message) {
    console.log(`[${level.toUpperCase()}]: ${message}`)
}

logger1("error", "test message");
logger1(undefined, "test message");

let alertCounter = 0;

const alert = () => {
    alertCounter +=1;
}

console.log(alertCounter)
alert();
console.log(alertCounter)