import React, {useState} from 'react'
// import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';
// PrimeReact theme (choose one, like Lara, Saga, etc.)
import 'primereact/resources/themes/lara-light-indigo/theme.css';

// PrimeReact core styles
import 'primereact/resources/primereact.min.css';

// PrimeIcons for icons (e.g., pi pi-home)
import 'primeicons/primeicons.css';

// import Agreementtable from '../table/agreementtable';

        



function Slider() {
const [visible, setVisible] = useState(true);




  return (
   <>
 

       <div className={` h-screen bg-gray-300 text-teal-400 overflow-hidden transition-all duration-700 ease-in-out 
  ${visible ? "w-[200px]" : "w-0"}`}>
  
  <div className={`${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
   
  </div>

</div>




   
   
   </>
  )
}

export default Slider
