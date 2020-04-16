import useLocalStorage from "./useLocalStorage";
import useEffect from "react";

export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key);

    const changeBody = document.querySelector('body');

    useEffect(()=> {
            if (someValue === true){
                changeBody.classList.add('dark-mode');
            } else {
                changeBody.classList.remove('dark-mode');
            }
        }, [someValue]);
            
                            
    
    return [someValue, setSomeValue]
    
};