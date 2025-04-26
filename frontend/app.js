const fetchStockData = async()=>{
    try{

        const response = await fetch('http://localhost:3000/stocks');

        const stocks = await response.json();

        const stockDataElement = document.getElementById('stockData');

        stockDataElement.innerHTML = '';

        stocks.forEach(stock => {
            const row = document.createElement('tr');
            row.innerHTML =`
            <td>${stock.symbol}</td>
            <td>${stock.price}</td>
            `;
            stockDataElement.append(row);
        });

    }catch(error){
        console.error('error in fetching stock data',error);
    }
};

setInterval(fetchStockData,3000);

fetchStockData();