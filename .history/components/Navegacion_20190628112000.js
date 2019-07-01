import Link from 'next/link';

const Navegacion = () => (
    <div>
        
        <ul>
            <h1>NextJS</h1>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/nosotros"><a>Nosotros</a></Link>
            </li>
        </ul>        
    </div>
);
 
export default Navegacion;