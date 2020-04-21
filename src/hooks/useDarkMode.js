import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (value) => {
    const [someValue, setSomeValue] = useLocalStorage('darkmode', value);
    const changeBody =  document.querySelector('body');

    useEffect(() => {
        if (someValue === true) {
            changeBody.classList.add('dark-mode')
        } else {
            changeBody.classList.remove('dark-mode')
        }
    }, [someValue])

    return [someValue, setSomeValue]
}