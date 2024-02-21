import { getToken } from "./users-service";

export default async function sendRequest (url, method = 'GET', payload = null) {
 const options = { method };
 if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
 }
 const token = getToken();
 if (token) {
   options.headers ||= {}; //Logical OR assignment operator
   //the Authorization header is used to send credentials (such as tokens)
   //to the server for authentication. 
   options.headers.Authorization = `Bearer ${token}` 
 }
 const res = await fetch(url, options);
 if (res.ok) return res.json();
 throw new Error('Bad Request');
}