import Link from 'next/link';

function Home() {
    return <div>
        <h1>Sobre</h1>

        <Link href="/sobre">
            <a>Ir para Sobre</a>
        </Link>
        <Link href="/tempo">
            <a>Ver Tempo</a>
        </Link>
    </div>
}

export default Home