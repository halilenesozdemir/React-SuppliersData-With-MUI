import EffectSample1 from './effectSample/EffectSample1';
import AddCategory from './fetchSample/AddCategory';
import AddCategoryWithAxios from './fetchSample/AddCategoryWithAxios';
import UserList from './fetchSample/UserList';
import ProductDetail from './propsSample/ProductDetail';
import TechButton from './propsSample/TechButton';
import CategoryTable from './stateSample/CategoryTable';

function App() {
  return (
    <>
      <div>Form</div>
      <TechButton title='Add' width={75} height={75}></TechButton>
    </>
  );
}

export default App;
