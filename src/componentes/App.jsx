import {getPosts, createPost, putPost, deletePost} from "../../api/postsApi"
import {DashBoard} from "./DashBoard"
import {DashMenu} from "./DashMenu"
import {Form} from "./Form"
import {useState, useEffect} from "react"
export default function App(){
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)
    const componenetes =[
        <DashBoard lista={posts}/>,
        <Form submit={enviarPost} metodo={true}/>,
        <Form submit={atualizarPost} metodo={false}/>,
        <DashBoard lista={posts} clique={removerPost}/>
    ]
    function trocarPagina(num){
        setPage(num)
    }
    async function enviarPost(formData){
        const dados = Object.fromEntries(formData)

        const resposta = await createPost({userId: dados.id, title: dados.titulo, body: dados.conteudo})
        console.log(resposta)
    }
    async function atualizarPost(formData){
        const dados = Object.fromEntries(formData)
        const resposta = await putPost(dados.postId, {userId: dados.id, title: dados.titulo, body: dados.conteudo})
        console.log(resposta)
    }
    async function removerPost(postId){
        const resposta = await deletePost(postId)
        console.log(resposta)
    }
    useEffect(() => {
        async function pegarPosts(){
            const conteudo = await getPosts()
            setPosts(conteudo)
        }
        pegarPosts()
    }, [])

    return (
        <main>
            <section className="table-container">
                <DashMenu clique={trocarPagina}/>
                {componenetes[page] ? componenetes[page] : undefined}
            </section>
        </main>
    )
}