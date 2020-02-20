class CharacterController{

    constructor( fetchService, characterService, searcherView){

        
        this.fetchService = fetchService;
        this.characterService = characterService
        this.searcherView = searcherView;
       
       
        this.cachingCharacter();
        this.searcherView.bindSearchCharacter(this.handleSearcher.bind(this));
    }


    handleSearcher(shearch){
       return this.characterService.findByName(shearch);
    }

    async cachingCharacter(){
       this.characterService.saveCharacters(await this.fetchService.getAllCharacters())
    }
}