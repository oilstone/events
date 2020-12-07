class Index {
    constructor() {
        this._init();
    }

    _init() {
        this._observers = [];
        this._history = {};
    }

    empty() {
        this._init();
    }

    listen(observer) {
        this._observers.push(observer);

        return this;
    }

    fire(event, payload) {
        let responses = [];

        this._archive(event, payload);

        for(let i = 0; i < this._observers.length; i++) {
            if(typeof this._observers[i][event] === 'function') {
                let response = this._observers[i][event](payload);

                if(response === false) {
                    break;
                }

                responses.push(response);
            }
        }

        return responses;
    }

    history(event) {
        return this._history[event];
    }

    _archive(event, payload) {
        if( ! (event in this._history)) {
            this._history[event] = [];
        }

        this._history[event].push(payload);
    }
}

export default Index;