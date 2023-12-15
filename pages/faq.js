import Link from 'next/link';
import Head from 'next/head';


// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Rendering

//getStaticProps roda apenas uma vez no acesso - recomendado para estatico
//getServerSideProps roda a cada acesso - recomendado pra dinamico

export async function getStaticProps(){
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faq = await fetch(FAQ_API_URL)
        .then((res) =>{
            return res.json();
        })
        .then((res) =>{
            return res;
        });

    return{
        props: {
            faq
        },
    };
}

export default function FAQPage({faq}){
    // const [faq, setFaq] = useState([]);
    // useEffect(()=>{

    // }, []);

    return(
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - Página de Perguntas FAQ</h1>
            <Link href="/">Ir para o home</Link>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}