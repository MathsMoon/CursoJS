function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function timed_Msg(msg, time) {
    //Para evitar o gargalo por conta das funções, utiliza-se o promises que funciona da seguinte forma:
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){ //Add a reject to prevent invalid messages from being sent.
                reject('Valor inserido não é uma String');
                return;
            }            
            resolve(msg);
            return;
        }, time);
    })
}

//Use an asynchronous method to get all messages in the correct sequence.
async function a_Wait() {
   try {
        const p1 = await timed_Msg('Frase 1');
        console.log(p1);
        const p2 = await timed_Msg('Frase 2');
        console.log(p2);
        const p3 = await timed_Msg('Frase 3');
        console.log(p3);
   } catch(e) {
    console.log(e);
   }
}

a_Wait();