import React from 'react'
import ProductResults from '../../components/productResults/ProductResults'
import './styles.scss'
import { useParams } from 'react-router-dom'

const Search = ({ }) => {

  const { filterType } = useParams();
  return (
    <div className="searchPage">
      <ProductResults showFilter={false} filterType={filterType} />
    </div>
  )
}

export default Search