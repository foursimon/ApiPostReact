import {TableItem} from "./TableItem"
import {useState} from "react"
export function DashBoard(props){
    const [idPost, setIdPost] = useState()
    function handleMouseHover(id){
        setIdPost(id)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th className="th-id">ID</th>
                    <th className="th-user">ID do usuário</th>
                    <th className="th-title">Título da publicação</th>
                    <th className="th-content">Conteúdo da publicação</th>
                </tr>
            </thead>
            <tbody>
                {props.lista.map(post => <TableItem hover={handleMouseHover} clique={props.clique} key={post.Id}{...post}/>)}
            </tbody>
            {props.clique ?
                <tfoot>
                    <tr>
                        <td colSpan={3}>Id do post a ser deletado:</td>
                        <td colSpan={1}>{idPost}</td>
                    </tr>
                </tfoot>
            : undefined}
        </table>
    )
}