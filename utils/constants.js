const READY = 0;
const LOADING = 1;
const WARNING = 2;
const ERROR = 3;

//reverse methods
function statusToText(status){
    switch(status){
        case READY:
            return "ready";
        case LOADING:
            return "loading";
        case WARNING:
            return "warning";
        case ERROR:
            return "error";
    }
}