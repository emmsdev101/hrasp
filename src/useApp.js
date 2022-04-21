import { useState } from "react";

const useApp = () =>{

    const[page, setPage]=useState("");

    const changePage = (paramPage) => {
        setPage(paramPage)
    }
}
export default useApp;