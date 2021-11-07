import Gallery_Select from '../gallery/Gallery_Select'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
import { useState } from 'react'
const Body = ({ data_harry }) => {

  const [filtredChar, setFiltredChar] = useState("all")
  
  console.log(filtredChar)

  return (
    <div className="contenu">
      <form>
        <label>Maisons de Poudlard</label>
          <Form  setFiltredChar={setFiltredChar} filtredChar={filtredChar}/>
      </form>
   <div>
      <Gallery_Select data={data_harry} filtredChar={filtredChar}/>
      </div>
    </div>
  )
}



Body.propTypes = {
  data_harry: PropTypes.arrayOf(
    PropTypes.shape({
      nom: PropTypes.string.isRequired,
      person_image: PropTypes.string.isRequired,
      maison: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Body
