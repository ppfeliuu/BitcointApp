import Head from 'next/head';
import { prependOnceListener } from 'cluster';


const MasterPage = () => (
    <div>
        <Head>
            <title>Bitcoin App</title>
        </Head>
        {props.children}
    </div>
);
 
export default MasterPage;