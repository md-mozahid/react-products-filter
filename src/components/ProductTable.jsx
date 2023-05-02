import React from 'react'
import CategoryRow from './CategoryRow'
import ProductRow from './ProductRow'

const ProductTable = ({
  products,
  filterProduct,
  inStockProduct,
  productName,
}) => {
  const rows = []
  let lastCategory = null

  products.map((product) => {
    // product filtering
    if (product.name.toLowerCase().indexOf(filterProduct) === -1) {
      return
    }
    if (inStockProduct && !product.stocked) {
      return
    }
    // if (productName !== product.name) {
    //   return
    // }
    // product show to UI
    if (product.category !== lastCategory) {
      rows.push(
        <CategoryRow category={product.category} key={product.category} />
      )
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <>
      <table className="table-fixed">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}

export default ProductTable
