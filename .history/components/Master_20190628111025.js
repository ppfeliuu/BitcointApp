import Head from 'next/head';


const MasterPage = () => (
    <div>
        <Head>
            <title>Bitcoin App</title>
        </Head>
        {props.children}
    </div>
);
 
export default MasterPage;