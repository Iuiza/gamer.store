import ItemPedido from "./ItemPedido"
import { Status } from './Status';
import { FormaPagamento } from './FormaPagamento';
import PedidoEntrega from "./PedidoEntrega";

export default interface Pedido{
    id: number
    data: Date
    itens: ItemPedido[]
    valorTotal: number
    Status: Status
    formaPagamento: FormaPagamento
    entrega: PedidoEntrega
}