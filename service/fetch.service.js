

class FetchService{

    get(endPoint){
        return fetch(`${API.URL}${endPoint}`).then(
            res => res.json()
        )
    }

    getAllCharacters(){
       return this.get(API.CHARACTERS);
    }

   

}