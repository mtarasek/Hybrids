const URL = 'https://localhost:44326/api/';

export function GetAllInspirations(){
    return fetch(URL + 'inspiration')
    .then(resp => resp.json())
}

export function GetAllNailPolishes(){
    return fetch(URL + 'NailPolish')
    .then(resp => resp.json())
}