import Head from 'next/head';


const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
        </Head>
        {props.children}
    </div>
);
 
export default MasterPage;