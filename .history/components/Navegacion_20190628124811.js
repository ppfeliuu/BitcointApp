import Link from 'next/link';

const Navegacion = () => (
    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/"><a className="navbar-brand">AllBitcoin</a></Link>
        </div>

    </nav>
);
 
export default Navegacion;