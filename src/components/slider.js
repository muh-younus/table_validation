import React from 'react'
// import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';
// PrimeReact theme (choose one, like Lara, Saga, etc.)
import 'primereact/resources/themes/lara-light-indigo/theme.css';

// PrimeReact core styles
import 'primereact/resources/primereact.min.css';

// PrimeIcons for icons (e.g., pi pi-home)
import 'primeicons/primeicons.css';

        



function slider() {

     const items = [
        {
            icon:"pi pi-bars"
        },
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

  return (
   <>
 <div className="card">
            <Menubar model={items} />
        </div>


   <div className="w-[200px] text-teal-400 bg-gray-300 h-screen overflow-none">

    <div>
        <h1>Slider</h1>

    </div>


   </div>
   
   </>
  )
}

export default slider
