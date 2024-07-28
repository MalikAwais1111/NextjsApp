

export function fetchData(url:string){
    return fetch(url)
    .then(response=>response.json())
    .then(data=>{
        return data.products
    })
}
