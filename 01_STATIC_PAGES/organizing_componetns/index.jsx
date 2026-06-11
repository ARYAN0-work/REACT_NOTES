import Header from "./Header"// default js and .jsx extension
import MainContent from "./MainContent"// default js and .jsx extension
import Footer from "./Footer"// default js and .jsx extension

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))


// our file is getting bigger so just like backend seprate files
function Page() {
    return(
        <>
        <MainContent/>
        <Footer/>
        <Header/>
        </>
    )
}


