export function Form(props){
    return(
        <form action={props.submit}>
            {props.metodo ? undefined : 
                <div>
                    <label htmlFor="userId">Id da publicação:</label>
                    <input id="postId" name="postId" type="number" />
                </div>
            }
            <div>
                <label htmlFor="userId">Id do usuário:</label>
                <input id="userId" name="id" type="number" />
            </div>
            <div>
                <label htmlFor="title">Título:</label>
                <input id="title" name="titulo" type="text" />
            </div>
            <div>
                <label htmlFor="content">Conteúdo:</label> 
                <textarea name="conteudo" id="content"></textarea>
            </div>
            <button>Enviar</button>
        </form>
    )
}