import { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div className="app">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        filterTextChange={setFilterText}
        stockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable
