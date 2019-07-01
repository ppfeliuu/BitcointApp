
import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';

const Index = (props) => (
   <MasterPage>
        <div className="row">                    
            <div className="col-12">
                <h2>Bitcoin Price</h2>
                <Precio 
                    precio={props.precioBitcoin}
                />
                
            </div>

            <div className="col-md-8">
                <h2>Bitcoin News</h2>
            </div>

            <div className="col-md-4">
                <h2>Bitcoin Next Events</h2>
            </div>
            
        </div>
   </MasterPage>        
);

Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-01&sortBy=publishedAt&apiKey=d366c02b66b04ee2bb3309e8e90df583`);


    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();

    console.log(resNoticias);

    return {
        precioBitcoin: resPrecio.data.quotes.USD
    }
}

export default Index;