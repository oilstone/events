class Dispatcher {
  constructor () {
    this._init()
  }

  _init () {
    this._observers = []
  }

  empty () {
    this._init()
  }

  listen (observer) {
    this._observers.push(observer)

    return this
  }

  fire (event, payload) {
    const responses = []

    for (let i = 0; i < this._observers.length; i++) {
      if (typeof this._observers[i][event] === 'function') {
        const response = this._observers[i][event](payload)

        if (response === false) {
          break
        }

        responses.push(response)
      }
    }

    return responses
  }
}

export {
  Dispatcher
}
