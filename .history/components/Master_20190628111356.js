import Head from 'next/head';
import Navegacion from '../components/Navegacion';

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
        </Head>

        <Navegacion />
        {props.children}
    </div>
);
 
export default MasterPage;