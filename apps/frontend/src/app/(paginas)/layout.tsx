import Pagina from "@/src/components/template/Pagina";
import { ProvedorProdutos } from "@/src/data/contexts/ContextoProdutos";
import { ProvedorCarrinho } from '../../data/contexts/ContextoCarrinho';
import { ProvedorPagamento } from '../../data/contexts/ContextoPagamento';

export default function Layout(props: any) {
    return(
        <ProvedorProdutos>
            <ProvedorCarrinho>
                <ProvedorPagamento>
                    <Pagina>{props.children}</Pagina>
                </ProvedorPagamento>
            </ProvedorCarrinho>
        </ProvedorProdutos>
    )
}