import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useLocationStore = create(immer((set)=>({
    activeLocation : DEFAULT_LOCATION,

    setActiveLocation:(location=null) => set((state)=>state.activeLocation=location),
    resetActiveLocation:()=>set((state)=>{state.ActiveLocation=DEFAULT_LOCATION})
})))

export default useLocationStore 