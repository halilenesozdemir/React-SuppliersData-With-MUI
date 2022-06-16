import EffectSample1 from './effectSample/EffectSample1';
import AddCategory from './fetchSample/AddCategory';
import AddCategoryWithAxios from './fetchSample/AddCategoryWithAxios';
import UserList from './fetchSample/UserList';
import ProductDetail from './propsSample/ProductDetail';
import CategoryTable from './stateSample/CategoryTable';

function App() {
  return (
    <>
      <ProductDetail name='Iphone' price={5000} description='Apple Ürünü...'></ProductDetail>
      <ProductDetail name='Samsung' price={3000} description='Samsung Ürünü...'></ProductDetail>
    </>
  );
}

export default App;
