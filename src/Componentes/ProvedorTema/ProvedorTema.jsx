import { ThemeProvider } from "@emotion/react"

const tema = {
    cores: {
        preto: '#000',
        branco: '#FFF',
        atencao: '',
        focus: '',
        primarias: {
            a: '#AF5C4F',
            b: '#EBD38A',
            c: ''
        },
        secundarias: {
            a: '',
            b: '',
            c: ''
        },
        neutras: {
            a: '',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: ''
        }
    },
    espacamentos: {
       xs: '8px',
       s : '16px',
       l : '32px',
       xl: '48px'
    },
    fontFamily: "'Montserrat', sans-serif"
}


export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}