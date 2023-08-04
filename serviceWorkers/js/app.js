const App = {
    SW: null,
    init(){
        if("serviceWorker" in navigator){
            navigator.serviceWorker.register("/sw.js", {
                scope: "/"
            }).then(registration=>{
                App.SW = registration.installing || registration.waiting || registration.active;
                console.log("serviceWorker register");
            })
            if(navigator.serviceWorker.controller){
                console.log("serviceWorker already installed");
            }
            navigator.serviceWorker.oncontrollerchange = (event)=>{
                console.log("new serviceWorker is activated")
            }

        }else{
            console.log("serviceWorker is not supported");
        }
    }
}
document.addEventListener('DOMContentLoaded', App.init);