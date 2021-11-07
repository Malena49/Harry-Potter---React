import PropTypes from 'prop-types'
import { useState } from 'react';
import Select from 'react-select';

const Form = ({data}) => {
  const maisons = [];
  for (let i = 0; i < data.length; i++) {
    maisons[i] = data[i].maison;
  }
  const maison_select = [...new Set(maisons)];



const options = [
  { value: 'Gryffindor', label: 'Gryffindor'},
  { value: 'Hufflepuff', label: 'Hufflepuff'},
  { value: 'Ravenclaw', label: 'Ravenclaw'},
  { value: 'Slytherin', label: 'Slytherin'},
]

const [selectedOption, setSelectedOption] = useState(null)

  return (
    
<div className="filter">
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      />
    </div>
  )


  
}
Form.propTypes={
      maison : PropTypes.string
}
export default Form
