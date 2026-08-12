import React, {useState,useEffect} from "react"
import api from "../../services/api"

import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"


const ListarProduto = () => {


// Explicação useStates
// const [nome da variável, nome da função para alterar o valor da variável] = useState(valor inicial da variável)
// Obs: o nome da função SEMPRE começa com a palavra "set"
// Exemplo: Quero declarar uma variável (número) cujo valor inicial seja 0
// const [numero, setNumero] = useState(0)

// Explicação useEffect : Um hook utilizado para executar códigos que ficam fora do controle direto da renderização da página
// Exemplo: buscar dados de uma API, configurar cronômetros, fazer algo quando o usuário aperta uma tecla
// Obs: [] manter vazio, quando você quiser que o seu código rode exatamente uma única vez, logo após o componente aparecer na tela
//      pela primeira vez, resumindo "Execute isso quando a página carregar e depois ignore", não importa

const [produtos, setProdutos] = useState([]);

useEffect(() => {
    api
        .get("/produto")
        .then((response) => {})
        .catch((error) => {})

}, []);





// Lista temporária de produtos

    const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza de calabresa",
            precoVenda: 59.90,
            descricao: "Pizza de calabresa sem cebola"
        },
        {
            id: 2,
            nome: "Pizza de Mussarela",
            precoVenda: 69.90,
            descricao: "Pizza de Mussarela com tomates frescos"
        },
        {
            id: 3,
            nome: "Pizza de Frango com Catupiry",
            precoVenda: 67.90,
            descricao: "Pizza de frango com Catupiry"
        },

    ]

    return (

        <div className="container">
            <MenuFuncionario />

            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th> {/* Nova coluna de Ações */}
                        </tr>
                    </thead>
                    <tbody>
                        {arrayProdutos.map((produto) => ( 
                        <tr key ={produto.id}>
                            <td style={{ fontSize: "13px" }}> {produto.nome}</td>
                            <td style={{ fontSize: "13px" }}>
                                {
                                    new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(produto.precoVenda)
                                }

                            </td>
                            <td style={{ fontSize: "13px" }}>{produto.descricao}</td>
                            <td className="text-center fs-6" style={{ width: "100px" }}>
                                {/* Botão de Editar */}
                                <button
                                    className="btn btn-sm btn-primary me-2">
                                    <i className="fas fa-pencil-alt"></i>{" "}
                                    {/* Ícone de editar */}
                                </button>
                                {/* Botão de Excluir */}
                                <button
                                    className="btn btn-sm btn-danger">
                                    <i className="fas fa-trash-alt"></i>{" "}
                                    {/* Ícone de excluir */}
                                </button>
                            </td>
                        </tr>


                        ))}

                     

                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default ListarProduto

