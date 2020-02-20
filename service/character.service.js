class CharacterService{

    constructor(){
        this.characters;
    }


    saveCharacters({results}){
        this.characters =  results;
    }


    findByName(search){
       return  this.characters.filter(({name}) => name.toUpperCase().includes(search.toUpperCase()));
    }


  


}