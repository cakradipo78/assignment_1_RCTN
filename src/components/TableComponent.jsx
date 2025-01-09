import React, { useEffect, useState } from "react";





export default function TableComponent(){
    const [currencyCAD,setCurrencyCAD] = useState()
    const [currencyEUR,setCurrencyEUR] = useState()
    const [currencyIDR,setCurrencyIDR] = useState()
    const [currencyJPY,setCurrencyJPY] = useState()
    const [currencyCHF,setCurrencyCHF] = useState()
    const [currencyGBP,setCurrencyGBP] = useState()
    



    useEffect(() =>{
        getDataCurrency()
    },[])
    
    async function getDataCurrency() {
        try {
            const data = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=4ac96bf77f874de79cbeb761c9c48224")
            const result =  await data.json()
            console.log(result.rates.CAD);            

            setCurrencyCAD(result.rates.CAD)
            setCurrencyEUR(result.rates.EUR)
            setCurrencyIDR(result.rates.IDR)
            setCurrencyJPY(result.rates.JPY)
            setCurrencyCHF(result.rates.CHF)
            setCurrencyGBP(result.rates.GBP)


    
        } catch (error) {
            console.log("error");
            
        }
        
    }
    
function handleBuy (currencyNow) {

    let result = Number(currencyNow * 1.05)
    return result.toFixed(5)

}


function handleSell (currencyNow) {

    let result = Number(currencyNow * 0.95)
    return result.toFixed(5)

}




    return(

         <>
         
            
            <table className="table" bg-warning>
                <thead className="text-danger">
                    <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">We Buy</th>
                    <th scope="col">Exchange</th>
                    <th scope="col">We Sell</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">CAD</th>
                        <td>{handleBuy(currencyCAD)}</td>
                        <td>{currencyCAD}</td>
                        <td>{handleSell(currencyCAD)}</td>
                    </tr>

                    <tr>
                        <th scope="row">EUR</th>
                        <td>{handleBuy(currencyEUR)}</td>
                        <td>{currencyEUR}</td>
                        <td>{handleSell(currencyEUR)}</td>
                    </tr>

                    <tr>
                        <th scope="row">IDR</th>
                        <td>{handleBuy(currencyIDR)}</td>
                        <td>{currencyIDR}</td>
                        <td>{handleSell(currencyIDR)}</td>
                    </tr>

                    <tr>
                        <th scope="row">JPY</th>
                        <td>{handleBuy(currencyJPY)}</td>
                        <td>{currencyJPY}</td>
                        <td>{handleSell(currencyJPY)}</td>
                    </tr>

                    <tr>
                        <th scope="row">CHF</th>
                        <td>{handleBuy(currencyCHF)}</td>
                        <td>{currencyCHF}</td>
                        <td>{handleSell(currencyCHF)}</td>
                    </tr>

                    <tr>
                        <th scope="row">GBP</th>
                        <td>{handleBuy(currencyGBP)}</td>
                        <td>{currencyGBP}</td>
                        <td>{handleSell(currencyGBP)}</td>
                    </tr>

                    
                </tbody>
                </table>

            
         
         </>

               
               
            
        )


}