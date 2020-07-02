import { ratesRepository } from '../ratesRepository.js';
    export function BuyCurrency()
    {
        let rates = new ratesRepository();

        let buy = document.querySelector("#btnBuy");
    
        buy.addEventListener('click', () => {
    
        document.querySelector("#option").innerHTML = "Du vill köpa: "
    
        document.querySelector("#lblBaseCurrency").innerHTML = 
        document.querySelector("#txtBaseCurrency").value + " " + 
        rates.getSelectedCurrency("#baseCurrency");
        
        let fixed = document.querySelector("#txtQuoteCurrency").value.substring(0, 6);
    
        document.querySelector("#lblQuoteCurrency").innerHTML = 
        fixed + " " + 
        rates.getSelectedCurrency("#quoteCurrency");
    
        document.querySelector("#lblPrice").innerHTML  = 
        fixed + " " + 
        rates.getSelectedCurrency("#quoteCurrency");
        });
    }
    
    export function SellCurrency()
    {
        let rates = new ratesRepository();

        let buy = document.querySelector("#btnSell");
    
        buy.addEventListener('click', () => {
    
        document.querySelector("#option").innerHTML = "Du vill sälja: "
    
        document.querySelector("#lblBaseCurrency").innerHTML = 
        document.querySelector("#txtBaseCurrency").value + " " + 
        rates.getSelectedCurrency("#baseCurrency");
        
        let fixed = document.querySelector("#txtQuoteCurrency").value.substring(0, 6);
    
        document.querySelector("#lblQuoteCurrency").innerHTML = 
        fixed + " " + 
        rates.getSelectedCurrency("#quoteCurrency");
    
        document.querySelector("#lblPrice").innerHTML  = 
        document.querySelector("#txtBaseCurrency").value + " " + 
        rates.getSelectedCurrency("#baseCurrency");
        });
    }

