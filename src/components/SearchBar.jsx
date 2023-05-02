const SearchBar = ({
  filterText,
  inStockOnly,
  filterTextChange,
  stockOnlyChange,
}) => {
  return (
    <>
      <form>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => filterTextChange(e.target.value)}
        />
        <br />
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => stockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </form>
    </>
  );
};

export default SearchBar;
