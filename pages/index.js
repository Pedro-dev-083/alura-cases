import Link from 'next/link';

export default function HomePage(){
    return(
        <div>
            <h1>Alura Cases - Home Page</h1>
            <Link href="/faq" passHref>Ir para o FAQ</Link>
        </div>
    )
}