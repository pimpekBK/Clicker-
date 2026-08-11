import { get, post } from "../api";
import { removeToken, saveToken } from "../token";

const URL = "/user";

export async function getMe() {
    
    try {
        const data = await get(`${URL}/me`);
        // console.log(data);
        
        if (data.success) {
            console.log(data.user);
            return data.user;
            
        }

        console.error(data.message);
        return null;

    } catch (error) {
        console.error(error);
        return null;
    }
}