import React from "react"
import './style.scss'

type botaoTypes = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined
}

function Botao({children, type}: botaoTypes) {
        return (
            <button type={type} className="botao">{children}</button>
        ) 
}

export default Botao