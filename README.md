# Blog Pessoal com Nextjs
Repositório para aplicação construída com Next.js de blog pessoal, com base no tutorial oficial.

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
[![GitHub issues](https://img.shields.io/github/issues/Alexz96/next-selfblog)](https://github.com/Alexz96/next-selfblog/issues)
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Alexz96/next-selfblog/blob/master/LICENSE)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/Alexz96/next-selfblog)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

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
// Se for feito conforme citado acima, no método getStaticPaths
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

### Rotas API

O Next.js disponibiliza de funcionalidades que permitem chamadas à APIs de forma estática e também dinâmica (assim como as rotas de arquivos).

A partir disso, de acordo com o próprio tutorial oficial, é explicitado que realizar chamadas à APIs nos métodos <i>getStaticProps</i> e <i>getStaticPaths</i> não é o ideal, pois são funções executadas apenas no lado servidor, não no lado do cliente.
Dito isso um bom caso de uso para esta funcionalidade acoplada ao Next.js, seria a e efetuar validações em um formulário e então salvar os dados diretamente em banco de dados.
Por fim, conclui-se que o uso de APIs no Next.js é justificado para se:
- Salvar dados diretamente no banco de dados;
- Comunicar com APIs externas de forma segura;
- Utilizar-se do Preview Mode (explicado abaixo);

### Preview Mode
De forma muito simplista e intuitiva, compreendi que o Preview Mode existe para que se possa realizar alterações de código e que se possa testá-lo em produção com base em cada "requisição", pois uma vez que o <i>build</i> é gerado só gerando um novo <i>build</i> para se visualizar a alteração.

### Search Engine Optimization (SEO)

É sabido que técnicas de Search Engine Optimization (SEO ou ainda, Otimização para Motor de Busca) são eficazes, mas por vezes, não se sabem quais os reais motivos por isto. Sendo assim, estão entre eles os seguintes:

- Qualitativo
  - Amplia a chance de um visitor se tornar cliente
- Confiabilidade
  - Aumenta a confiança na marca e missão/produto
- Baixo custo
  - A aplicação de técnicas de otimização não possuem custos diretos, sem considerar tempo e esforço despendidos

<b> 3 Pilares da otimização </b>
<details>Pilares básicos para a otimização de sites</details>

- Técnico: Otimização para captura e de desempenho;
- Criação: A criação de conteúdo visando palavras-chave com boa estratégia;
- Popularidade: Aumento da popularidade do site com o uso de <i>backlinks</i> apresentados em sites de terceiros;

<b>Responsabilidades dos sistema de busca</b>

- Captura: Processo de busca em toda a internet e verificação de conteúdo.
- Indexação: Processo de guardar os dados encontrados na etapa de captura, para serem facilmente acessados.
- Renderização: Processo de executar qualquer recursos que o site possua visando realçar as ferramentas e conteúdo do mesmo. O processo não necessariamente é executado em todas páginas e pode ser realizado antes da indexação.
- Classificação: Processo em que consultas são realizadas no site e para criação de resultados relevantes de acordo com uma entrada do usuário. (Aqui que os critérios de cada ferramenta estão encaixados, ex: Google, DuckDuckGo...)

Neste tutorial oficial do NextJS, foi abordado o Googlebot.

Importante citar que cada ferramenta possui uma fatia do mercado, sendo demonstrada no link a seguir: <a href="https://gs.statcounter.com/search-engine-market-share">Market Shares</a>

O Google usa principalmente o Googlebot Desktop e o Googlebot Smartphone como <i>Web Crawlers</i>. Também, sabe-se que executar códigos JavaScript no cliente é mais custoso para o Google portanto reduzir essa necessidade, pode melhorar a classificação do site. (NextJS já realiza isso)

<b>HTTP Status codes relevantes para SEO</b>

- 200: Mais desejado para as páginas, padrão do NextJS é retornar ele quando renderiza a página com sucesso.
- 301/308: Indica redirecionamento e o NextJS por padrão usa o 308 (que não permite a mudança de método HTTP - GET/POST), assim "ensina" o robô que deve seguir outra URL.
- 302: Normalmente deveria ser usado o 301, mas em caso de páginas de promoção por exemplo, pode-se usar o 302 indicando que é uma mudança/redirecionamento temporária(o). Exemplo: 
```js
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
```
- 404: Retorno esperado quando a página não existe e não é necessariamente algo muito ruim, a menos que seja muito recorrente, pois caso seja pode tornar a classificação no SEO muito falha ou confusa. (Pode ter uma página customizável, em /pages com o nome 404.js )
- 410: Não muito usado, mas indica que um conteúdo foi removido e provavelmente não retornará. Bom exemplo é indicar um produto fora de estoque ou por exemplo, post removido do blog.
- 500: Indica um erro inexperado na aplicação e também pode ter pagína customizada (Dentro do diretório /pages com nome 500.js).
- 503: Indica que o servidor não está pronto para esta requisição. Geralmente é útil retornar quando o site está fora e provavelmente será por um tempo. Previne a perda de classificação no SEO.

<b>Robots.txt</b>

É um arquivo que indica quais páginas os robôs devem ou podem acessar e geralmente é posicionado no diretório raiz da aplicação para que os robôs o sigam. Neste caso, o arquivo criado estará em /public.

NOTA: o diretório /public não deve ser renomeado em nenhuma hipótese.

<b>XML Sitemaps</b>

A forma mais fácil de se manter uma comunicação com os crawlers do Google e é nele que se fornecem informações sobre páginas, vídeos e demais dados do site e os relacionamentos entre eles. Os Crawlers leem este arquivo para capturar os dados do site de forma mais inteligente.
O uso é altamente aconselhado e se possível que este seja dinâmico, pois o Google constantemente busca novas descobertas e este arquivo poderá fornecê-las (levando a uma melhor classificação).

Gerando Sitemaps
- Manual:
  - Criar arquivo /public/sitemap.xml:
  ```xml
    <xml version="1.0" encoding="UTF-8">
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>http://www.example.com/foo</loc>
       <lastmod>2021-06-01</lastmod>
     </url>
   </urlset>
   </xml>
  ```
- Dinâmico:
  - getServerSideProps em /pages/sitemap.xml.js:
  ```js
    const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts'

    function generateSiteMap(posts) {
      return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!--We manually set the two URLs we know already-->
        <url>
          <loc>https://jsonplaceholder.typicode.com</loc>
        </url>
        <url>
          <loc>https://jsonplaceholder.typicode.com/guide</loc>
        </url>
        ${posts
          .map(({ id }) => {
            return `
          <url>
              <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
          </url>
        `
          })
          .join('')}
      </urlset>
    `
    }

    function SiteMap() {
      // getServerSideProps will do the heavy lifting
    }

    export async function getServerSideProps({ res }) {
      // We make an API call to gather the URLs for our site
      const request = await fetch(EXTERNAL_DATA_URL)
      const posts = await request.json()

      // We generate the XML sitemap with the posts data
      const sitemap = generateSiteMap(posts)

      res.setHeader('Content-Type', 'text/xml')
      // we send the XML to the browser
      res.write(sitemap)
      res.end()

      return {
        props: {}
      }
    }

    export default SiteMap
  ```

<b>Metatags para SEO</b>

Além de se usar  o robots.txt no diretório /public, podemos utilizar tags internas nas páginas como por exemplo:

```html
<!-- Geral -->
<meta name="robots" content="noindex,nofollow" />
<!-- Especifico do Google -->
<meta name="googlebot" content="noindex,nofollow" />
```

Uma prática interessante para páginas que podem ocorrer filtragens (que podem não ter nenhum resultado), é usar o "noindex".

A melhor maneira de garantir a não indexação é na usando a tag na própria página.

Tags Google
- nositelinkssearchbox
- notranslate

<b>Exemplo</b>

```jsx
import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <p>Here we show some meta tags off!</p>
    </div>
  )
}

export default IndexPage
```

Em casos que o Google identifica conteúdos repetidos ou duplicados, a página pode ser rebaixada na classificação e isso vale para sites externos também. Portanto aqui que está a grande sacada das <i>Canonical Tags</i>, pois a partir delas que o Google identifica quem é a original.

Exemplo de tag para a página de telefones em um e-commerce:
```html
<link rel="canonical" href="https://example.com/products/phone" />
```

<b>Renderização e Classificação</b>

Estratégias de renderização

- Static Site Generation (SSG): Provável melhor estratégia para SEO, pois gera o HTML na hora do build. Os robôs usam principalmente o HTML.

- Server-Side Rendering (SSR): Uma ótima escolha para SEO, pois assim como SSG é gerado o HTML, mas em tempo de requisição. Ótimo para casos de páginas dinâmicas.

- Incremental Static Generation (ISR): Uma opção para sites com grandes quantidades de páginas. É configurado por páginas. Com isso, mantém-se os benefícios de gerações estáticas.

- Client Side Rendering (CSR): Não é uma boa solução para SEO, tendo em vista que o HTML gerado é básico e só então quando o JavaScript é executado que o conteúdo é incluído. Recomendado para páginas que não devem estar classificadas em motores de buscas (ex: dashboards, página de conta de usuários).

<b>AMP</b>

Praticamente um requisito criado pelo Google em função dos dispositivos portáteis (smartphones) com a ideia de se carregar conteúdos mais rapidamente.

<a href="https://nextjs.org/docs/advanced-features/amp-support/introduction">Suporte AMP Next.js</a>

<b>Estruturas de URLs</b>

É uma parte importante de SEO e independente do peso que o Google dá para esse planejamento, vale à pena usar.
Aqui temos alguns princípios a se considerar:

- Semântica: É melhor utilizar palavras ao invés de IDs e números... por exemplo 'estudo/ti/nextjs' é melhor do que 'curso-1/modulo-2'.

- Padrões lógicos e consistentes: Deve-se ter um padrão consistente e lógico na estruturação, por exemplo, agrupando por pasta os produtos de um e-commerce.

- Foco em palavras-chave: Deve-se utilizar palavras-chave que auxiliem no entendimento do conteúdo da página.

- Não baseado em parâmetros: Nem sempre criar URLs com base em parâmetros é uma boa opção, pois às vezes não são semânticos.

<b>Metatags importantes</b>

- Title: Uma das mais importantes para SEO, pois o Google usa para entender o que tem no meu site. Usar palavras-chave no título melhoram a classificação.
- Description: Uma tag importante, pois afeta o <i>click-through-rate</i> nas buscas. Considerar complementar informações do título e o uso das palavras-chave. Exemplo: 
```html
<meta
  name="description"
  content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
/>
```
Usa-se o componente Head do Next para essas tags.

- Open Graph: Não oferece muitos benefícios para SEO, mas é bom para o usuário pois mostra o conteúdo melhor e fica melhor de ser compartilhado em redes sociais. Além disso, ele aumenta a possibilidade de clique, que por sua vez aumenta as visitas ao site. Exemplo:

```html
<!-- Property é importante -->
  <meta property="og:title" content="Social Title for Cool Page" />
  <meta
    property="og:description"
    content="And a social description for our cool page"
  />
  <meta
    property="og:image"
    content="https://example.com/images/cool-page.jpg"
  />
```

<b>SEO em cada página</b>

- H1 e Headings tags: Auxilia na leitura, indicando o que está por vir de leitura após e auxilia os motores de busca a entender quais partes da página são importantes. É recomendado o uso de h1 em todas as páginas e que seja próximo do título.
- Links internos: Sites que recebem mais links, provavelmente serão mais confiáveis aos usuários. Deve se usar o <i>href</i> para classificação da página. Este algoritmo verifica a quantidade e qualidade de links para certas páginas. Exemplo com o NextLink e Styled Components:
```jsx
import Link from 'next/link'
import styled from 'styled-components'

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
  color: red;
`

function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <RedLink>{name}</RedLink>
    </Link>
  )
}

export default NavLink

// Sem styled-components, pode se usar simplesmente Link -> <a>
```

<b>Web Vitals e Core Web Vitals</b>

Basicamente são guias e métricas para se mensurar a UX do site. E as Core Web Vitals são as principais métricas para se medir tempo de <i>loading</i>, interatividade e estabilidade visual. Sendo as seguintes métricas parte da Core Web Vitals:

- Largest Contentful Paint (LCP): Verifica o desempenho de loading (tempo) para carregar o maior (mais pesado) conteúdo da página.
- First Input Delay (FID): Mede a responsividade/interatividade do site (tempo que leva uma interação do usuário). Total Blocking Time (TBT) pode ser medido pelo Lighthouse. (Maior tempo de delays de inputs prejudicam).
- Cumulative Layout Shift (CLS): Mede a estabilidade geral do site. Site que tenha sua interface mudada inesperadamente como por exemplo, alterar o local do botão após carregar um texto, prejudica na métrica. (Considerando-se o loading do DOM)

Quanto melhor o score do site nestas três métricas, melhor o desempenho geral do site. Estas métricas podem ter os valores "Good", "Needs Improvement" e "Poor".

Duas formas de aplicar Core Web Vitals:

<ol>
  <li>Ter o melhor score em todas as métricas: tentar ser perfeccionista pode ser complicado para sites grandes .</li>
  <li>Fazer um benchmark com os competidores: a competição é com os outros com as mesmas palavras-chave</li>
</ol>

<b>Consideração:</b>
Web Vitals e Core Web Vitals visam principalmente beneficiar o usuário com base na experiência de carregamento da página, interação e afins. Além disso principalmente é uma iniciativa que busca melhorar a classificação do página e a experiência (UX) nela.

<b>Melhorando os Core Web Vitals</b>

Lighthouse: 
Realiza auditorias em uma URL específica, retornando um relatório no que precisa melhorar.

OBS: AdBlockers podem ocasionar a geração de um relatório incompleto ou impreciso.

Componentes de Imagem e sua otimização:
O próprio componente Image do Next.js realiza otimizações no HTML, principalmente setando-se os tamamnhos da imagem.

Importações dinâmicas:
O Next.js aceita importações dinâmicas para JavaScript. Um exemplo de conversão seria:
De ->
```jsx
import Fuse from 'fuse.js'
import _ from 'lodash'

const fuse = new Fuse(countries, {
  keys: ['name'],
  threshold: 0.3
})

<input
  type="text"
  placeholder="Country search..."
  className={styles.input}
  onChange={async (e) => {
    const { value } = e.currentTarget;

    const searchResult = fuse
      .search(value)
      .map((result) => result.item);

    const updatedResults = searchResult.length
      ? searchResult
      : countries;
    setResults(updatedResults);

    // Fake analytics hit
    console.info({
      searchedAt: _.now(),
    });
  }}
/>
```

Para ->

```jsx
// Sem os imports e a constante
<input
  type="text"
  placeholder="Country search..."
  className={styles.input}
  onChange={async e => {
    const { value } = e.currentTarget
    // Dynamically load libraries
    const Fuse = (await import('fuse.js')).default
    const _ = (await import('lodash')).default

    const fuse = new Fuse(countries, {
      keys: ['name'],
      threshold: 0.3
    })

    const searchResult = fuse.search(value).map(result => result.item)

    const updatedResults = searchResult.length ? searchResult : countries
    setResults(updatedResults)

    // Fake analytics hit
    console.info({
      searchedAt: _.now()
    })
  }}
/>
```
OBS: Essa prática resolve o problema "Remove unused JavaScript" no load da página e melhora o TTI (Time To Interactive) que por sua vez melhor o FID.

Importações dinâmicas de componentes:
Serve para realizar um delay de componentes desnecessários no loadda página.

```jsx
// Incluir importação
import dynamic from 'next/dynamic'
```

De ->
```jsx
import CodeSampleModal from '../components/CodeSampleModal'

<CodeSampleModal
  isOpen={isModalOpen}
  closeModal={() => setIsModalOpen(false)}
/>

```

Para ->
```jsx
const CodeSampleModal = dynamic(() => import('../components/CodeSampleModal'), {
  ssr: false
})

{
  isModalOpen && (
    <CodeSampleModal
      isOpen={isModalOpen}
      closeModal={() => setIsModalOpen(false)}
    />
  )
}
```

Com tais alterações de exemplo, os Web Vitals estarão muito melhores, restando então as seguintes melhorias como sugestão:
- Usar HTTP2: Usando algum host que permita (Vercel por exemplo)
- Elementos de Imagem que não tem tamanhos definidos: Bug do Lighthouse

Otimizações de Fontes:
Fontes customizadas são importantes para o Branding, Design e consistência do site, no entanto usar fontes customizadas não deveriam pesar no desempenho. (Mas normalmente pesam)

Importante citar que o Next.js tem otimização automática de fontes e essa otimização ocorre em tempo de build, influenciando FCP (First Contentful Paint) e LCP (Largest Contentful Paint).

Otimização de Scripts de terceiros:
Next.js tem um componente que realiza estas otimizações, sendo chamado de Script component.
Vale salientar que o uso padrão de scripts deve ser feito no Head, mas com este componente, pode ser usado em qualquer local. Segue exemplo:

```jsx
// De
import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <script src="https://www.googletagmanager.com/gtag/js?id=123" />
      </Head>
    </div>
  )
}

// Para
import Script from 'next/script'

function IndexPage() {
  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=123"
      />
    </div>
  )
}
```

OBS: Há duas estratégias para este load, sendo: strategy="afterInteractive" e strategy="lazyOnload". Respectivamente ocorrem quando, a página fica interativa e durante o tempo de "bobeira" do browser.

<b>Monitoração de Web Vitals</b>

Um componente chave para melhorar durante as iterações, é manter registros através do tempo e em produção.

Ferramentas:
- Next.js Analytics: Mede as páginas usando as Web Vitals. E fazendo deploy no Vercel, automaticamente podemos coletar os dados.
- Custom Reporting: O Next.js disponibiliza função de <i>reportWebVitals</i>, que pode ser implementada. Um exemplo seria:
```jsx
// dentro de _app.js
export function reportWebVitals(metric) {
  console.log(metric)
}
```

Após isso, realizar build do App e start do App. E então abrir as DevTools -> Console que serão printadas as métricas.

OBS: FID só será mostrada quando houver interação na página

- Google Data Studio e Datasets: Ferramenta Open-Source para análises das métricas de usuários reais. Único porém de se usar isso, é que o site precisa ter muitos acessos, caso contrário a falta de dados de acessos, fará com que não funcione.
Geralmente os datasets são atualizados com delay de 15 dias após encerramento de mês.
- <a href="https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect">PageSpeed Insights</a>

OBS: Para Lighthouse e Chrome DevTools, Total Blocking Time terá de ser usado ao invés de First Input Delay.


