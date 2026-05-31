import {JSON_PLACEHOLDER_API} from './constants';

export const httpClient = async (url, options={})=>{
    try {
    const res = await fetch(`${JSON_PLACEHOLDER_API}${url}`,{
      ...options,
      headers: {
        'content-type': 'application/json', ...options.headers
      }
    });
    if(!res.ok){
        throw new Error(`Network response was not ok. It's ${res.status}.`);
    }
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}