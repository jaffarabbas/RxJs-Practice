const { Observable } = require('rxjs');
const { tap } = require('rxjs/internal/operators/tap');
const { map } = require('rxjs/operators');

const users = {
    data: [
        {
            status: 'active',
            age: 15
        },
        {
            status: 'active',
            age: 20
        },
        {
            status: 'inactive',
            age: 25
        },
    ]
}

const observable = new Observable((subscribe) => {
    subscribe.next(users);
}).pipe(
    map((users) => {
        console.log('1) users', users)
        return users.data;
    }),
    map((users) => {
        console.log('2) users', users)
        return users.filter((user) => {
            return user.status === 'active'
        });
    }),
    map((users) => {
        console.log('3) users', users)
        return (users.reduce((acc, user) => {
            return acc + user.age
        }, 0)) / users.length
    }),
    map((averageAge) => {
        console.log('4) averageAge', averageAge)
        if (averageAge > 18) {
            return 'adult'
        } else {
            return 'child'
        }
    }),
    tap((result) => {
        console.log('5) result', result)
    })
);

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