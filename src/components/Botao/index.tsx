import React from "react"
import './style.scss'

type botaoTypes = {
    children: React.ReactNode;
}

function Botao({children}: botaoTypes) {
        return (
            <button className="botao">{children}</button>
        ) 
}

export default Botao