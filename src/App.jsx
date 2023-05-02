import FilterableProductTable from "./components/FilterableProductTable";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <FilterableProductTable products={Products} />
    </>
  );
}

export default App;
