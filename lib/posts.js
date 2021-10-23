import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Pega o nome dos arquivos do diretório /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove a extensao ".md" do nome do arquivo para pegar o id
        const id = fileName.replace(/\.md$/, '')

        // Le os arquivos markdown como sendo string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Usa a lib gray-matter para fazer um parse dos arquivos
        const matterResult = matter(fileContents)

        // Combina os dados do arquivo com o id do post
        return {
            id,
            ...matterResult.data
        }
    })
    // Ordena os posts pela data
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    // Importante: A lista retornada abaixo, deve ser um objeto com esta estrutura
    // caso nao tenham-se as chaves params e id, o metodo getStaticPaths falhará
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usa a lib gray-matter para fazer um parse dos metadados dos posts
    const matterResult = matter(fileContents);

    // Usa o remark para converter de markdown para string de HTML
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combina os dados do post com o id e o conteudo em HTML
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}