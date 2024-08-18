import { useEffect, RefObject, useRef } from 'react';


export default function useClickOutside(ref: RefObject<HTMLElement>, callback: (outside: boolean) => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(true); // Clicked outside
            } else {
                callback(false); // Clicked inside
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, callback]);
}



const selectRef = useRef<HTMLDivElement>(null);

useClickOutside(selectRef, function(stage){
    console.log("Clicked outside", stage);
});
