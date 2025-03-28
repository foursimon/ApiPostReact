export function TableItem(props){
    return(
        <tr onMouseOver={props.hover ?() => props.hover(props.Id) : undefined}
        onClick={props.clique ? () => props.clique(props.Id) : undefined}>
            <td>{props.Id ? props.Id : undefined}</td>
            <td>{props.UserId ?props.UserId : undefined}</td>
            <td>{props.Title ? props.Title : undefined}</td>
            <td>{props.Body ? props.Body : undefined}</td>
        </tr>
    )
}