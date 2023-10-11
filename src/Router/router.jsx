import { createBrowserRouter } from "react-router-dom";
import PaginaFormulario from "../Paginas/Cadastro/DadosPessoais";

import LayoutBase from "../Paginas/LayoutBase";
import PaginaLogin from "../Paginas/login/Login";
import LayoutBaseUserLogado from "../Paginas/LayoutBaseUserLogado";
import LayoutBaseLogin from "../Paginas/LayoutBaseLogin";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path: "",
                element: <PaginaFormulario />,
            },
        ]
    },
    {
        path: "/login",
        element: <LayoutBaseLogin />,
        children: [
            {
                path: "",
                element: <PaginaLogin />,
            },
        ]
    },
    {
        path: "user",
        element: <LayoutBaseUserLogado />,
        children: [
            {
                path: "home",
                element: <div>Home</div>

            },
            {
                path: "estoque",
                element: <div>Estoque</div>

            },
            {
                path: "pedido",
                element: <div>Pedidos</div>
            },
        ]

    }
])