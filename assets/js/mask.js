//MASKS
//CEP MASK
const cep = document.querySelector("#cep")
if(cep) 
    {
        cep.onpaste = () => {
            return false;
        }
    }
    cep.addEventListener("input", (e) => {
        const data = e.target.value
        
        if(data.length == 5) e.target.value += "-"
    })

//CARDNUMBER MASK
const cardnumber = document.querySelector("#cardnumber")
if(cardnumber) 
    {
        cardnumber.onpaste = () => {
            return false;
        }
    }
    cardnumber.addEventListener("input", (e) => {
        const data = e.target.value
        
        if(data.length == 4 || data.length == 9 || data.length == 13) e.target.value += " "
    })

//EXPIREDATE MASK
const expiredate = document.querySelector("#expiredate")
if(expiredate) 
    {
            expiredate.onpaste = () => {
                return false;
            }
        }
        expiredate.addEventListener("input", (e) => {
            const data = e.target.value
            
            if(data.length == 2) e.target.value += "/"
    })
//
