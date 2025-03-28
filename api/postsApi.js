const api = process.env.VITE_API
const key = process.env.VITE_KEY
async function getPosts(){
    try{
        const resposta = await fetch(api,{
            method: "GET",
            headers:{
                "Content-type": "application/json",
                "Api-Key": key
            },
            mode: "cors"
        })
        const conteudo = await resposta.json()
        if(!resposta.ok) throw new Error("Algo deu errado na requisição: " + JSON.stringify(conteudo, null, 4))
        return conteudo
    }
    catch(erro)
    {
        return "Ocorreu um erro ao buscar as publicações:\n" + erro.message
    }
}
async function getPostById(id){
    try{
        if(!id) throw new Error("Insira o ID da publicação.")
        const resposta = await fetch(`${api}/${id}`,{
            method: "GET",
            headers:{
                "Content-type": "application/json",
                "Api-Key": key
            },
            mode: "cors"
        })
        const conteudo = await resposta.json()
        if(!resposta.ok) throw new Error("Algo deu errado na requisição: " + JSON.stringify(conteudo, null, 4))
        return conteudo
    }
    catch(erro){
        return "Ocorreu um erro ao buscar a publicação:\n" + erro.message
    }
}
async function createPost(post){
    try{
        if(!post.userId) throw new Error("Insira o ID do usuário.")
        const resposta = await fetch(`${api}`,{
            method: "POST",
            headers:{
                "Content-type": "application/json",
                "Api-Key": key
            },
            mode: "cors",
            body: JSON.stringify({
                userId: post.userId,
                title: post.title,
                body: post.body
            })
        })
        const conteudo = await resposta.json()
        if(!resposta.ok) throw Error(JSON.stringify(conteudo.errors, null, 3))
        return conteudo
    }
    catch(erro){
        return "Ocorreu um erro ao criar uma publicação:\n" + erro.message
    }
}

async function putPost(postId, post){
    try{
        if(!postId) throw new Error("Insira o ID da publicação.")
        const resposta = await fetch(`${api}/${postId}`,{
            method: 'PUT',
            headers:{
                "Content-type": "application/json",
                "Api-Key": key
            },
            mode: "cors",
            body:JSON.stringify({
                userId: post.userId,
                title: post.title,
                body: post.body
            })
        })
        const conteudo = await resposta.json()
        if(!resposta.ok) throw new Error(JSON.stringify(conteudo.errors, null, 4))
        return conteudo
    }catch(erro){
        return "Ocorreu um erro ao atualizar a publicação:\n" + erro.message
    }
}

async function patchPost(postId, post){
    try{
        if(!postId) throw new Error ("Insira o id da publicação")
        const resposta = await fetch(`${api}/${postId}`,{
            method: "PATCH",
            headers: {
                'Content-type': "application/json"
            },
            headers:{
                "Content-type": "application/json",
                "Api-Key": key
            },
            mode: "cors",
            body: JSON.stringify({
                title: post.title,
                body: post.body
            })
        })
        const conteudo = await resposta.json()
        if(!resposta.ok) throw new Error(JSON.stringify(conteudo, null, 4))
        return conteudo
    }catch(erro){
        return "Ocorreu um erro ao atualizar a publicação:\n" + erro.message
    }
}

async function deletePost(postId){
    try{
        if(!postId) throw new Error("Insira o ID da publicação.")
        const resposta = await fetch(`${api}/${postId}`,{
            method: "DELETE",
            headers:{
                "Content-type": "application/json",
                "Api-Key": key
            },
            mode: "cors"
        })
        if(!resposta.ok) throw new Error(JSON.stringify(await resposta.json(), null, 4))
        return "Publicação deletada com sucesso."
    }catch(erro){
        return "Ocorreu um erro ao deletar a publicação:\n" + erro.message
    }
}

export {getPosts, getPostById, createPost ,putPost, patchPost, deletePost}