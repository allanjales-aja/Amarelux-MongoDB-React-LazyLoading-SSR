import React from 'react';
/* import Produto from './Produto';
import PedProdutos from './prodAdicionado';
import Detalhes from './Detalhes' */        /* Lazy Loading */
import {lazy, Suspense} from 'react';

const Produto = lazy(() => import('./Produto'));
const PedProdutos = lazy(() => import('./prodAdicionado'));
const Detalhes = lazy(() => import('./Detalhes'));


export default function Produtos() {

    return(
        <div className = "container-fluid">
            <div className = "row ml-2 w-90">
                <div className = "col-w-15" id = "Categorias">
                <Suspense fallback={ <p>Carregando...</p> }>
                    <Detalhes />
                </Suspense>
                <div className = "mt-3">
                <Suspense fallback={ <p>Carregando...</p> }>
                    <PedProdutos />
                </Suspense>
                </div>                
                </div>
                <div className = "col Produtos">
                <Suspense fallback={ <p>Carregando...</p> }>
                    <Produto />
                </Suspense>
                </div>
            </div>
            
        </div>
    );
}