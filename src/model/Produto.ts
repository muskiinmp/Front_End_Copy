import Categoria from "./Categoria"

interface Produto{
    id: number
    nome: string
    quantidade: number 
    foto: string
    preco: number
    descricao: string
    tamanho: string
    categoria?: Categoria | null
}
export default Produto