// Variable
const compte = document.querySelector("#compte");
const somme = document.querySelector("#somme");
let result="";
const boutton = document.querySelector("#boutton")


// Boutton
boutton.removeEventListener('click',verifier)


function verifier(){
    console.log(somme)
    console.log(compte)

}


// Verrifier les infortmations du compte en banque
if (compte.length == 16) {
    result = 'valide';
  } else {
    result = 'non valide';
}