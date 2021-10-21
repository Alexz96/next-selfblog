# Blog Pessoal com Nextjs
Repositório para aplicação construída com Next.js de blog pessoal, com base no tutorial oficial.

# Extras
## Anotações importantes

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
- 

### Estilização Global dos componentes
Conforme tutorial oficial, a utilização de estilos globais devem ser incluídos apenas no arquivo "/pages/_app.js", conforme trecho abaixo exemplifica:
```javascript
// ESTILOS GLOBAIS SO PODEM SER IMPORTADOS AQUI
import '../styles/global.css';
```

