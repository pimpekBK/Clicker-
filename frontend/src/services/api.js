const API_URL = "http://localhost:3000";

export async function apiRequest(url, options={}) {
    const response = await fetch(`${API_URL}${url}`, {
        ...options,

        headers: {
            "Content-Type": "application/json",

            ...(token && {
                Authorization: `Bearer ${token}`
            }),

            ...options.headers
        },

        body: options.body
            ? JSON.stringify(options.body)
            : undefined
    });

    return response.json();
}

export const get = (url, options = {}) =>
    apiRequest(url, {
        ...options,
        method: "GET"
    });

export const post = (url, body, options = {}) =>
    apiRequest(url, {
        ...options,
        method: "POST",
        body
    });

export const put = (url, body, options = {}) =>
    apiRequest(url, {
        ...options,
        method: "PUT",
        body
    });

export const del = (url, options = {}) =>
    apiRequest(url, {
        ...options,
        method: "DELETE"
    });