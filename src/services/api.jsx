import axios from "axios"


const api = axios.create({
    baseURL: "http://172.19.0.49/pizzariateste/api/v1",
    timeout: 100000 // tempo máximo de resposta (10 seg)
})

export default api

// Utilize em baseURL

//http://172.19.0.49/pizzariateste/api/v1 -> API do professor,SÓ FUNCIONA NA ESCOLA!!!
//http://localhost:8080/endereco_da_sua_api -> API do aluno rodando na porta 8080 "back-end local"