import { createBrowserRouter } from "react-router-dom";
import PaginaFormulario from "../Paginas/Cadastro/DadosPessoais";

import LayoutBase from "../Paginas/LayoutBase";
import PaginaLogin from "../Paginas/login/Login";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path: "",
                element: <PaginaFormulario />,
            },
            {
                path: "login",
                element: <PaginaLogin />
            }
            
        ]
    },
])