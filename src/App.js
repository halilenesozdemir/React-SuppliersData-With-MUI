import EffectSample1 from './effectSample/EffectSample1';
import AddCategory from './fetchSample/AddCategory';
import AddCategoryWithAxios from './fetchSample/AddCategoryWithAxios';
import UserList from './fetchSample/UserList';
import ProductDetail from './propsSample/ProductDetail';
import PropClickEventSample from './propsSample/PropClickEventSample';
import TechButton from './propsSample/TechButton';
import CategoryTable from './stateSample/CategoryTable';

function App() {
  const hola = () => {
    alert('Hola');
  };
  return (
    <>
      <PropClickEventSample hello={hola}></PropClickEventSample>
    </>
  );
}

export default App;
