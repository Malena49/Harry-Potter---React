import Gallery_Select from '../gallery/Gallery_Select'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
const Body = ({ data_harry }) => {
  

  return (
    <div>
      <form>
        <label>Maisons de Poudlard</label>
          <Form data={data_harry} />
      </form>
      <Gallery_Select data={data_harry} />
      {//data_harry.map((person) => <Gallery key={person.nom} {...person} />)
      }

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
