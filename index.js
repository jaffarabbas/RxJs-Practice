const { Observable } = require('rxjs');

const observable = new Observable((subscribe) => {
    subscribe.next(10);
    subscribe.next(11);
    subscribe.next(20);
    subscribe.next(30);
    subscribe.next(40);
})

const observer = {
    next: (value) => {
        console.log(value)
    },
    error: (error) => {
        console.log(error)
    },
    complete: () => {
        console.log('complete')
    }
}

observable.subscribe(observer)