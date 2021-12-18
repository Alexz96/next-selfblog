
export default function About() {
    return (
        <h1>Página exemplo de redirecionamento SEO</h1>
    )
}

export async function getStaticProps(context) {
    return {
        redirect: {
            destination: '/',
            permanent: true //triggers 308
        }
    }
}