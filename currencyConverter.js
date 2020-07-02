import { ratesRepository } from './ratesRepository.js';

export class currencyConverter {

    Convert()
    {

        let rates = new ratesRepository();

        let result;

        let value = document.querySelector("#txtBaseCurrency").value;

        let selectedBaseCurrency = rates.getSelectedCurrency("#baseCurrency");
        
        let selectedQuoteCurrency = rates.getSelectedCurrency("#quoteCurrency");

        if(selectedBaseCurrency == selectedQuoteCurrency)
        {
            result = document.querySelector("#txtBaseCurrency").value;
        }
        else
        {
            let euro = rates.getSelectedExchangeRate(selectedBaseCurrency);

            let baseCurrency = value / euro;

            let quoteCurrency = rates.getSelectedExchangeRate(selectedQuoteCurrency);

            result = baseCurrency * quoteCurrency;
        }

        document.querySelector("#txtQuoteCurrency").value = result;
    }
}
