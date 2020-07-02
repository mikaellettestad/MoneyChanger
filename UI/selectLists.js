import {currencyConverter} from '../currencyConverter.js';
import {ratesRepository} from '../ratesRepository.js';


export class selectCurrency{
    
    constructor()
    {
        this.selectListId;
    }

    load(selectListId)
    {
        this.selectListId = selectListId;
        this.create();
    }
    
    create()
    {
        // console.log(this.getlastFetch());

        let rates = new ratesRepository();
    
        if(rates.getRates() === null || this.getHoursPassedSinceLastFetch() > 1)
        {
            let url ="https://api.exchangeratesapi.io/latest";
            
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.addSelectListOptions(data);
                this.storeData(data);
                this.storeLastFetch();
            })
        }
        else
        {
            this.addSelectListOptions(rates.getRates());
        }
    }
    
    addSelectListOptions(data)
    {
        for(let rate in data.rates)
        {
            let newTag = document.createElement('option');
            
            let option = document.createTextNode(rate);
    
            newTag.appendChild(option);
                    
            document.querySelector(this.selectListId).appendChild(newTag);
        }

        this.addDefaultBaseCurrency();

        this.addConverter();
    }


    addDefaultBaseCurrency()
    {
        let selectList = document.querySelector(this.selectListId);
        
        let newTag = document.createElement('option');
            
        let option = document.createTextNode("EUR");
    
        newTag.appendChild(option);

        selectList.appendChild(newTag);
    }
    
    addConverter()
    {
        let selectList = document.querySelector(this.selectListId);

        selectList.addEventListener('change',()=>{
    
            let converter = new currencyConverter();
    
            converter.Convert();
    
        });
    }


    storeData(data)
    {
        localStorage.setItem("rates", JSON.stringify(data));
    }

    storeLastFetch()
    {
        localStorage.setItem("lastFetch", JSON.stringify(new Date()));
    }

    getHoursPassedSinceLastFetch()
    {
        let json = localStorage.getItem("lastFetch");

        let lastFetch = new Date(JSON.parse(json));

        let now = new Date();

        let hoursPassed = now.getHours() - lastFetch.getHours();

        return hoursPassed;
    }
}