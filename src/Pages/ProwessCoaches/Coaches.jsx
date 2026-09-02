// import React from 'react'
// import Coaches1 from './Coaches1'
// import Coaches2 from './Coaches2'
// import Coaches3 from './Coaches3'
// import Coaches4 from './Coaches4'

// const Coaches = () => {
//     return (
//         <>
//          <Coaches1/>   
//          <Coaches2/>
//          <Coaches3/>
//          <Coaches4/>
//         </>
//     )
// }

// export default Coaches










import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom' // <-- YE LINE ADD KARO
// import Coaches1 from './Coaches1'
import Coaches2 from './Coaches2'
import Coaches3 from './Coaches3'
import Coaches4 from './Coaches4'
import Coaches5 from './Coaches5'


const Coaches = () => {
    const location = useLocation() // <-- YE LINE ADD KARO

    // <-- YE POORA useEffect ADD KARO
    useEffect(() => {
        if (location.hash === "#coaches2-section") {
            setTimeout(() => {
                const el = document.getElementById("coaches2-section");
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 400);
        }
    }, [location.hash]);
    // <-- EFFECT YAHAN KHATAM

    return (
        <>
         <Coaches5/>
         {/* <Coaches1/>    */}
         <Coaches2/>
         <Coaches3/>
         <Coaches4/>
        </>
    )
}

export default Coaches