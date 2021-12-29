import { AppProps } from "next/app";
// ESTILOS GLOBAIS SO PODEM SER IMPORTADOS AQUI
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App;