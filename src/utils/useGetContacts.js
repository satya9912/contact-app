import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "./contactSlice";

export const useGetContacts = () => {
    const contacts = useSelector(store => store.contact.contacts);
    const dispatch = useDispatch();
    useEffect( () => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch(setContacts(data));
    }
}