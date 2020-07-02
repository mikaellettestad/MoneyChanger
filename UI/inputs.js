import { currencyConverter } from '../currencyConverter.js';

export function InputBaseCurrency()
{
    let txtBaseCurrency = document.querySelector("#txtBaseCurrency");
    
    txtBaseCurrency.addEventListener("input", () => {
    
        let converter = new currencyConverter();

        converter.Convert();
    });
}
