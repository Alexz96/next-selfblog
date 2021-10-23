# Blog Pessoal com Nextjs
Repositório para aplicação construída com Next.js de blog pessoal, com base no tutorial oficial.

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
[![GitHub issues](https://img.shields.io/github/issues/Alexz96/next-selfblog)](https://github.com/Alexz96/next-selfblog/issues)
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Alexz96/next-selfblog/blob/master/LICENSE)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/Alexz96/next-selfblog)

# Extras
## Anotações importantes
### Estilização Global dos componentes
Conforme tutorial oficial, a utilização de estilos globais devem ser incluídos apenas no arquivo "/pages/_app.js", conforme trecho abaixo exemplifica:
```javascript
// ESTILOS GLOBAIS SO PODEM SER IMPORTADOS AQUI
import '../styles/global.css';
```

É importante citar que o NextJS proporciona formas de renderização de conteúdo sem que seja necessário o JavaScript, pois primeiro ele renderiza a página e então exporta o HTML apenas para o navegador. Também cabe salientar que tais implementações devem ser feitas apenas dentro dos arquivos de páginas, no diretório "/pages".<br>
Dito isso, posso citar os seguintes tipos de renderização:

### Static Generation
- É uma forma mais indicada para páginas estáticas;
- É feita a renderização em tempo de <i>build</i>;
- É identificado no código pela função de nome <strong>getStaticProps</strong>, como pode ser visto no arquivo em "/pages/index.js";
### Server-Side Rendering
- É uma forma de renderização mais indicada para páginas mais dinâmicas, que possuem conteúdo se atualizando constantemente;
- É feita a renderização em tempo de execução com base em cada requisição;
- É identificado no código pela função de nome <strong>getServerSideProps(context)</strong>, como pode ser visto no arquivo em "/pages/index.js":
  - No parâmetro <i>context</i> terão todos os demais parâmetros da requisição;

### Dynamic Routes
- É usado para gerar páginas que dependem de dados externos;
- Realiza um <i>link</i> com páginas criadas no sistema de arquivos;
- Para se ter rotas dinâmicas, os arquivos devem seguir a nomenclatura [id].js;
  - Para se acessar os exemplos criados nesta aplicação, acessar no navegador: http://localhost:3000/posts/ssg-ssr ou http://localhost:3000/posts/pre-rendering
- É identificado no código quando há exportação de função com nome <strong>getStaticPaths</strong>;
- Pode ser usado na forma de retornar todos os caminhos subsequentes, conforme exemplo extraído da documentação abaixo:
  - Considerando o nome de arquivo conforme segue: pages/posts/[...id].js, que assim aceitará rotas como: "/posts/a", "/posts/a/b" e assim por diante;
```javascript
// Se for feito conforme citado acima, no metodo getStaticPaths
// a implementação seria como segue
return [
  {
    params: {
      // Gera estáticamente as páginas /posts/a/b/c
      id: ['a', 'b', 'c']
    }
  }
  //...
]

// E no método getStaticProps
export async function getStaticProps({ params }) {
  // params.id seriam ['a', 'b', 'c']
}
```
- Páginas 404 podem ser sobrescritas se criar um arquivo em "pages/404.js"
