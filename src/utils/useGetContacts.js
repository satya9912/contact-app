export const useGetContacts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    console.log(json);
}