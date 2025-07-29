import Slider from './components/slider'
import Agreementtable from './table/agreementtable'
import Navbar from './Nav/navbar'
import Form from './agreementform/form'

function App() {
  return (
    <>
    <Navbar />
    <div className="flex">
    <Slider />
    <Agreementtable />
   

    </div>
     <Form />
    </>
  );
}

export default App;
