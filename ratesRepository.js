export class ratesRepository{
    
    getRates()
    {
        let data;
    
        data = JSON.parse(localStorage.getItem("rates"));
        
        return data;
    }
    
    
    getSelectedCurrency(id)
    {
    
        var x = document.querySelector(id);
    
        var i = x.selectedIndex;
    
        return x.options[i].text;
    }
    
    
    getSelectedExchangeRate(currency)
    {
        let rates = new ratesRepository();

        if(currency == "EUR")
        return 1;
    
        let data = rates.getRates();
        
        for(let x in data.rates)
        {
            if (x == currency)
            return data.rates[x];
        }
    
        return null;
    }
}