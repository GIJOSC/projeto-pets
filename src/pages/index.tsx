import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'


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
    </div>
  )
}

export default Home
