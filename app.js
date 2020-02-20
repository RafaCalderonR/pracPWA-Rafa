if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('./sw.js');
}


new CharacterController( new FetchService(), new CharacterService(),new CharacterView(window.document));