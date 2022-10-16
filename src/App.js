import MenuOpenContext from './Components/context/MenuOpenContext';
import ButtonComponents from './Components/ui/ButtonComponents';
import Model1 from './Components/ui/Model1';
import Model2 from './Components/ui/Model2';
import Model3 from './Components/ui/Model3';

function App() {
  return (
    <MenuOpenContext>
      <div className="main-box flex-center-all-col">
        <ButtonComponents />
        <div className="flex-sb-all-row width-100 p-10">
          <Model1 />
          <Model2 />
          <Model3 />
        </div>
      </div>
    </MenuOpenContext>
  );
}

export default App;
