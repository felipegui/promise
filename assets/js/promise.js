/*
    Promise
*/
function test() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ok!');
        }, 3000);
    });
    return promise;
}

test().then((resposta) => {
    console.log(resposta);
});