import React from 'react'
import {Input} from 'semantic-ui-react'
 
const SearchBar = props => {
  return(
      <Input icon='search' type="text" placeholder="search user" onChange={props.searchFunc}/>
  )
}
 
export default SearchBar