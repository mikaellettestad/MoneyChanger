import {BuyCurrency, SellCurrency} from './Buttons.js';
import { InputBaseCurrency } from './inputs.js';
import { selectCurrency } from './selectLists.js';

export class UI {

    LoadButtons()
    {
        BuyCurrency();
        SellCurrency();
    }

    LoadInputs()
    {
        InputBaseCurrency();
    }
        
    LoadSelectLists()
    {
        let selectBaseCurrency = new selectCurrency();
        selectBaseCurrency.load("#baseCurrency");

        let selectQuoteCurrency = new selectCurrency();
        selectQuoteCurrency.load("#quoteCurrency");
    }
}