import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

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
        <p>Olá, me chamo Alexsander! E sou um desenvolvedor de aplicações ávido por UX.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
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