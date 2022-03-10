import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext();


function DeviceProvider({children}) {


    const [desktop, setDesktop] = useState();

    useEffect(() => {

        if(window.matchMedia("only screen and (max-width: 760px)").matches){
            setDesktop(false)
          } else {
            setDesktop(true)
          }

    }, []);
    

    return (
        <DeviceContext.Provider value={[desktop, setDesktop]}>
            {children}
        </DeviceContext.Provider>
    );
}

export default DeviceProvider;
