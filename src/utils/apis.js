import { httpClient } from ".";

export const fetchData = async () => {
    const url = 'posts/';
    const responseData = await httpClient(url);
    if(responseData === null){
        console.error("Failed to fetch data from API");
        return;
    }
    return responseData;
};
