const fizz = 'Fizz'; //multiplo 3
const buzz = 'Buzz'; //multiplo 5

// Faccio partire il ciclo da uno e lo continuo finchè non fa 100 iterazioni
for(let i=1; i <= 100; i++){
  let verify = true;
  if((!(i % 3)) && (!(i % 5))){
    console.log(fizz + buzz);
    verify = false;
  }else if(!(i % 3)){
      console.log(fizz);
      verify = false;
    }else if(!(i % 5)){
        console.log(buzz);
        verify = false;
    }else if(verify) console.log(i);
}

