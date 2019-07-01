import Link from 'next/link';

const Nosotros = () => (
    <div>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/nosotros"><a>Nosotros</a></Link>
            </li>
        </ul>
        <p>Nosotros</p>
    </div>
)

export default Nosotros;