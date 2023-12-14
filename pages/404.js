import Link from 'next/link';

export default function Page404(){
    return(
        <div>
            <h1>404 - Você foi longe demais, deseja voltar pra civilização?</h1>
            <Link href="/" passHref>Ir para HOME</Link>
        </div>
    )
}