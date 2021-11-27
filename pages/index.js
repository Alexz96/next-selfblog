import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

// Funcao que executa os processos para Static Generation
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
};

// Funcao que executa processo para Server Side Rendering
// Obs: nao utilizado nesta aplicacao
/*
  export async function getServerSideProps(context) { // context tem parametros especificos da request
    // Esta funcao e mais indicada quando os dados estao sempre se atualizando
    return {
      props: {
        // Qualquer dado proveniente de uma API, Banco de dados...
      }
    }
  }
*/

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Olá! Me chamo Alexsander. Eu sou um desenvolvedor de aplitivos que busca desenvolver uma UX especial.<br />
          Atualmente trabalho na Sygecom como desenvolvedor Web Júnior e estou envolvido em tecnologias como:
          <ul>
            <li>Vue.js</li>
            <li>ReactJS</li>
          </ul>
          No entanto meu foco não é somente em Web, pois gosto bastante de desenvolvimento Mobile, principalmente se tratando em Flutter e Android Nativo (Java e Kotlin).<br />
          Bom, sem mais delongas este é um site que desenvolvi com o Next.js junto ao React para aprender mais e aplicar o que aprendo no tutorial Oficial. Sinta-se à vontade para ler os breves posts (em inglês).
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Abaixo eh um exemplo de Client-side Rendering
// onde sao feitas operacoes especificas de um usuario por exemplo
/*
  import useSWR from 'swr'

  function Profile() {
    const { data, error } = useSWR('/api/user', fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
  }
 */