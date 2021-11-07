import PropTypes from 'prop-types'

const Form = ({ setFiltredChar, filtredChar }) => {

const handleChange = (e) => {
  setFiltredChar(e.target.value)

} 

const options = [
  { value: 'all', label: 'all'},
  { value: 'Gryffindor', label: 'Gryffindor'},
  { value: 'Hufflepuff', label: 'Hufflepuff'},
  { value: 'Ravenclaw', label: 'Ravenclaw'},
  { value: 'Slytherin', label: 'Slytherin'},
]
  return (
    
<div className="filter">
    <select value={filtredChar} onChange={handleChange}>
      {
        options.map((option) =>
        <option key={option.value} value={option.value}>{option.label}</option>  
        )
      }

    </select>
    </div>
  )


  
}
Form.propTypes={
      maison : PropTypes.string
}
export default Form
