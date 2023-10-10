import { RouterProvider } from "react-router-dom"
import { router } from "./Router/router"

import { ProvedorTema } from "./Componentes/ProvedorTema/ProvedorTema"
import { Estilos } from "./Componentes/EstilosGlobais/Estilos"


function App () {
  return (<ProvedorTema>
    <Estilos />
    
    <RouterProvider router={router} />

    </ProvedorTema>
  )
}

export default App