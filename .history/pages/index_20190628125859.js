
import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';

const Index = () => (
   <MasterPage>
        <div className="row">                    
            <div className="col-12">
                <h2>Bitcoin Price</h2>
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
    const precio = await fetch('https://api.cointmarketcap.com/v2/ticker/1/');
}

export default Index;