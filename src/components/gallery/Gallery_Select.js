import PropTypes from 'prop-types'
import Gallery from './gallery'

const Gallery_Select = ({data}) => {
 
  return (
    <>
      {data.map((person) => <Gallery key={person.nom} {...person} />)
      }
    </>
  )
}
Gallery_Select.propTypes={
  nom: PropTypes.string,
      person_image : PropTypes.string,
      maison : PropTypes.string
}
export default Gallery_Select
