// Check to see if the user's browser supports service workers
if('serviceWorker' in navigator){
    navigator.serviceWorker
        .register()
        .then((registration) => {})
        .catch((error) => {console.log(`Service Worker Registration Failed: ${error}`)});
}