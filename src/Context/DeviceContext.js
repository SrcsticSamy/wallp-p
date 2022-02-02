import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext();


function DeviceProvider({children}) {


    const [desktop, setDesktop] = useState();
    const [baseUrl, setBaseUrl] = useState("");


    useEffect(() => {

        if(window.matchMedia("only screen and (max-width: 760px)").matches){
            setDesktop(false)
            setBaseUrl()
          } else {
            setDesktop(true)
          }

    }, []);
    

    return (
        <DeviceContext.Provider value={[desktop, setDesktop, baseUrl, setBaseUrl]}>
            {children}
        </DeviceContext.Provider>
    );
}

export default DeviceProvider;
