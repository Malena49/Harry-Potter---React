import PropTypes from 'prop-types'
const Gallery = ({nom, person_image, maison}) => {
  
  return (
   <article>
<img src={person_image} alt={nom}/>
<h2>{nom}</h2>
<p>{maison}</p>
<img src={`${maison}.jpg`} className="house" alt={maison}/>
   </article>
  )

}

Gallery.propTypes={
  nom: PropTypes.string.isRequired,
      person_image : PropTypes.string.isRequired,
      maison : PropTypes.string.isRequired
}
export default Gallery
