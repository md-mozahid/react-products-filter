import { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const Table = ({ products }) => {
  const [filterProduct, setFilterProduct] = useState('')
  const [inStockProduct, setInStockProduct] = useState(false)
  const [productName, setProductName] = useState('Apple')

  return (
    <div className="bg-slate-300 w-72 mx-auto p-5">
      <SearchBar
        filterProduct={filterProduct}
        inStockProduct={inStockProduct}
        filterChange={setFilterProduct}
        stockChange={setInStockProduct}
        productName={productName}
        productChange={setProductName}
      />
      <ProductTable
        products={products}
        filterProduct={filterProduct}
        inStockProduct={inStockProduct}
        productName={productName}
      />
    </div>
  )
}

export default Table
