const crypto = require('crypto');


const func = ()=> {
    let input  = 0;

    while(true){
        let str =  input.toString();
        let hash =  crypto.createHash('sha256').update(str).digest('hex');
        if(hash.startsWith('00000')){
            return{ input :  str, hash: hash}
        }
        input++;
    }
}

let a=func()
console.log(a)

