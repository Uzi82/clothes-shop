import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootStore, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector