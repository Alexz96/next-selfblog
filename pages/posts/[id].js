import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

// Retorna uma lista com os possiveis valores para o id 
export async function getStaticPaths() {
    const paths = getAllPostIds(); // Aqui contem toda a estrutura definida em posts/[id].js
    return {
        paths,
        fallback: false
    }
}

// Retorna os dados necessarios de um determinado id
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}