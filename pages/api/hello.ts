import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: 'Hello' })
    // Aqui poderia ser realizado uma operacao de salvar direto em banco
    // os dados que forem recebidos em req, com validacoes antes.
}

// ==== ANOTACOES ====
// Nao se deve BUSCAR dados de uma API nas funcoes getStaticProps e getStaticPaths
// As rotas da API também podem ser dinamicas