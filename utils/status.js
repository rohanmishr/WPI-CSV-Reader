class Status {
    constructor(){
        this.status = READY;
        this.text = "Awating commands...";
    }

    render(){
        $("#status")[0].innerHTML = this.text;
        $("#status")[0].className = "status-" + statusToText(this.status);
    }

    set(text, status){
        this.text = text;
        this.status = status;
        this.render();
    }
}

//use this instance to call status methods
var stat = new Status;

