import PropTypes from 'prop-types'
const Option = ({maison}) => {
return (

  <option value={maison} defaultValue>
   {maison}
  </option>
)
}
Option.propTypes={
    maison : PropTypes.string
}
export default Option
