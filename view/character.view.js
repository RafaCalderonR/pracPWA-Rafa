class CharacterView{

    constructor(view){

        this.view = view;
        this.searcher =  this.view.getElementById('searcher');
        this.characters = this.view.getElementById('characters');
        this.input = this.view.createElement('input');
        this.input.className = 'inputSeacher';
        this.searcher.appendChild(this.input);

        
    }


    bindSearchCharacter(handler){
       

        this.input.addEventListener('keyup', event =>{
              this.displayCharacters(handler(event.target.value));
        })
    }

    displayCharacters(characters){
        this.clear()
       characters.map(this.createCharacter);
       
    }

    createCharacter = ({gender, image, name, species, status }) => {

        const card = this.view.createElement('card');
        card.className = 'card border-primary mb-3 mx-1';
        card.style = 'width: 10rem;'
        const img = this.view.createElement('img');
        img.className = "card-img-top"
        img.src = image;
        const container = this.view.createElement('div');
        const nameTitle = this.view.createElement('h4');
        const pGender = this.view.createElement('p');
        const pSpecie = this.view.createElement('p');
        const pStatus = this.view.createElement('p');
        nameTitle.innerText = name;
        pGender.innerText = gender;
        pSpecie.innerText = species;
        pStatus.innerText = status;

        card.append(img,container,nameTitle, nameTitle, pGender, pSpecie, pStatus)
        this.characters.appendChild(card)



       
        
    }

    clear(){
        this.characters.innerText = ''
    }

    

}



  