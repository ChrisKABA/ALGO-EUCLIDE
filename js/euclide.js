    let inputElement1 = document.getElementById("nombre1");
    let inputElement2 = document.getElementById("nombre2");
    let resultat = document.getElementById("Resultat");


    let algoEuclide = () =>{
        let r1 = inputElement1.value;
        let r2 = inputElement2.value;
        if (r1 && r2){
            console.log(r2);
            r1 = validator(r1) ? parseInt(r1) : 0;
            r2 = validator(r2) ? parseInt(r2) : 0;
            while (r2 !== 0) {
            q = Math.floor(r1 / r2);
            r =  r1 - q * r2;
            r1 = r2;
            r2 = r;
            }
        }
        resultat.innerHTML = ""
        resultat.innerHTML = r1
    }

    
    let validator = (data) =>{
        return !isNaN(data);
    }


    let deleted = () =>{
        inputElement1.value = ""
        inputElement2.value = ""
        resultat.innerHTML = ""
    }





