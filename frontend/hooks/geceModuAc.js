import { useEffect } from "react";
import { useLocalStorage } from "./localStorageKullan";

export const useGeceModu = (initialValue) => {
    const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialValue);

    return [geceModu, setGeceModu];
}