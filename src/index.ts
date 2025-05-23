import express, {Request,Response} from 'express';
import { stocks,Stock } from './stocks';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 3000;

app.get('/', (req:Request,res:Response) =>{
    res.send('Stock Price Simulator API is running!');
});

const simulateStockPrices = () => {
    setInterval(() => {
        stocks.forEach(stock => {
            const priceChange = (Math.random() - 0.5) * 10;
            const newPrice = stock.price + priceChange;
            stock.price = parseFloat(Math.max(newPrice, 0).toFixed(2)); // Ensure price ≥ 0, with 2 decimal precision
        });
    }, 1000);
};


simulateStockPrices();

app.get('/stocks',(req:Request,res:Response)=>{
    res.json(stocks);
});

app.get('/stocks/:symbol',(req:Request,res:Response)=>{

    const checkSymbol = req.params.symbol.toUpperCase();

    const stock = stocks.find(s=>s.symbol===checkSymbol);

    if(stock){
        res.json(stock)
    }else{
        res.status(404).json({
            error:'Stock not found'
        });
    }
});


app.listen(PORT,() => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
