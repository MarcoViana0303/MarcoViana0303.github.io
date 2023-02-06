import { useState, useMemo } from 'react';
import myContext from './myContext';

function myProvider({ children }) {
    const [adicao, setAdicao] = useState(0)
    
    const adicionarNumero = () => {
        setAdicao(adicao + 1);
    }

    const contexto = useMemo(() => ({
       adicionarNumero, 
       adicao
    }), [adicionarNumero, adicao])

    return(
        <myContext.Provider value={ contexto }>
            { children }
        </myContext.Provider>
    )
}

export default myProvider;