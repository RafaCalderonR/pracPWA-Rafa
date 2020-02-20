self.addEventListener('install', e => {


    const files = caches.open( 'static-v1')
        .then( cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/assets/data/characters.json',
                '/assets/styles/grid.style.css',
                '/assets/styles/view.style.css',
                '/constants/service.constants.js',
                '/controller/character.controller.js',
                '/service/character.service.js',
                '/service/fetch.service.js',
                '/view/character.view.js',
                '/app.js'
            ]);

        
        });

    const external = caches.open( 'inmutable-v1' )
            .then( cache => cache.add('https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sketchy/bootstrap.min.css'));


    e.waitUntil( Promise.all([files, external]) );

});





function clearCache( cacheName, items ) {


    caches.open( cacheName )
        .then( cache => {
            return cache.keys()
                .then( keys => {
                    if ( keys.length > items ) {
                        cache.delete( keys[0] )
                            .then( clearCache(cacheName, items) );
                    }
                });

            
        });
}


self.addEventListener('fetch', e => {


    const response = caches.match( e.request )
       .then( res => {

           if ( res ) return res;

           return fetch( e.request ).then( newResp => {

               caches.open( 'dynamic-v1' )
                   .then( cache => {
                       cache.put( e.request, newResp );
                       clearCache( 'dynamic-v1', 50 );
                   });

               return newResp.clone();
           });

        });

           e.respondWith(response);



});

