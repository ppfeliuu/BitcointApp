import Head from 'next/head';
import Navegacion from '../components/Navegacion';

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        </Head>

        <Navegacion />
        {props.children}
    </div>
);
 
export default MasterPage;