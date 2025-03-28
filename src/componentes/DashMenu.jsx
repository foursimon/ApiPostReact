export function DashMenu({clique}){
    return(
        <div className="container-menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <button onClick={() => clique(0)} className="list-button">Publicações</button>
                </li>
                <li className="menu-item">
                    <button onClick={() => clique(1)} className="list-button">Enviar publicação</button>
                </li>
                <li className="menu-item">
                    <button onClick={() => clique(2)} className="list-button">Atualizar publicação</button>
                </li>
                <li className="menu-item">
                    <button onClick={() => clique(3)} className="list-button">Deletar publicação</button>
                </li>
            </ul>
        </div>
    )
}