import React from 'react'

const SearchBar = ({
  filterProduct,
  inStockProduct,
  filterChange,
  stockChange,
  productName,
  productChange,
}) => {
  return (
    <>
      <h1 className="text-2xl text-center uppercase pb-3">
        product filter cart
      </h1>
      <form className="pb-5">
        <input
          className="inputText"
          type="text"
          placeholder="Search..."
          value={filterProduct}
          onChange={(e) => filterChange(e.target.value)}
        />
        <br />
        <label>
          <input
            className="mr-2"
            type="checkbox"
            value={inStockProduct}
            onChange={(e) => stockChange(e.target.checked)}
          />
          Only available products
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value={productName}
            onChange={(e) => productChange(e.target.checked)}
          />{' '}
          Apple
        </label>
      </form>
    </>
  )
}

export default SearchBar
