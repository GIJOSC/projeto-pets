import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'
import Lista from '../ui/components/Lista/Lista'


function MeuComponente() {
    return  <div> Treina Web</div>    
}
const Home: NextPage = () => {
  return (
    <div >
          <Titulo 
              titulo=" "
              subtitulo={<span>
                  Com um pequeno valor mensal, voce <br />
                  pode <strong>adotar um pet virtualmente</strong> 
              </span>}
           />
           <Lista />
    </div>
  )
}

export default Home
