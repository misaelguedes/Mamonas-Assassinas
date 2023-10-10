import './Discografia.css'

export default function Discografia() {
    return (
        <article>
            <h2>Como Banda Utopia</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Ano de Gravação</th>
                        <th scope="col">Ano de Lançamento</th>
                        <th scope="col">Título</th>
                        <th scope="col">Formato</th>
                        <th scope="col">Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1991</td>
                        <td>1992</td>
                        <td>Utopia (LP)</td>
                        <td>Vinil</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1991-1992</td>
                    <td>1992</td>
                        <td>A Fórmula do Fenômeno</td>
                        <td>CD</td>
                        <td>Gravaram 1000 cópias, e venderam apenas 100.</td>
                    </tr>
                    <tr>
                        <td>1992</td>
                        <td>1997 (Postumamente)</td>
                        <td>A Utopia dos Mamonas</td>
                        <td>CD</td>
                        <td>Edição histórica do álbum A Fórmula do Fenômeno</td>
                    </tr>
                </tbody>
            </table>
            <h2>Como Mamonas Assassinas</h2>
            <h3 className="disc">Fita Demo</h3>
            <ul>
                <li>1995: Mamonas Assassinas (Fita Demo)</li>
            </ul>
            <h3 className="disc">Álbuns de Estúdio</h3>
            <ul>
                <li>1995: Mamonas Assassinas</li>
                <li>1998 A Fórmula do Fenômeno (Utopia e Mamonas Assassinas)</li>
            </ul>
            <h3 className="disc">Coletâneas</h3>
            <ul>
                <li>1998: Atenção, Creuzebek: a Baixaria Continua!</li>
                <li>2009: One: 16 Hits</li>
                <li>2011: Pelados em Santos</li>
            </ul>
            <h3 className="disc">Álbuns Ao Vivo</h3>
            <ul>
                <li>2002: Mamonas Assassinas – Show Ao Vivo em Valinhos - Arquivo Familiar (DVD)</li>
                <li>2006: Mamonas Ao Vivo (CD)</li>
            </ul>
        </article>
    )
}