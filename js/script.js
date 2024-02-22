const fizz = 'Fizz'; //multiplo 3
const buzz = 'Buzz'; //multiplo 5

const contBox = document.getElementById('cont-box');
// Faccio partire il ciclo da uno e lo continuo finchè non fa 100 iterazioni

for(let i=1; i <= 100; i++){
  let verify = true;
  if((!(i % 3)) && (!(i % 5))){
    contBox.innerHTML += `
      <div class="box  fourth-color rounded-4">${fizz + buzz}</div>
    `;
    console.log(fizz + buzz);
    verify = false;
  }else if(!(i % 3)){
      contBox.innerHTML += `
        <div class="box second-color rounded-4">${fizz}</div>
      `;
      console.log(fizz);
      verify = false;
    }else if(!(i % 5)){
        contBox.innerHTML += `
        <div class="box third-color rounded-4">${buzz}</div>
        ` ;
        console.log(buzz);
        verify = false;
    }else if(verify){
      contBox.innerHTML += `
        <div class="box first-color rounded-4">${i}</div>
        `;
      console.log(i);
    } 
}

