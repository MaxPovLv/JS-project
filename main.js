fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (let userItem of value) {
            let divUser = document.createElement('div')
            let userText = document.createElement('h2')
            userText.innerText = `${userItem.id} ${userItem.name}`
            divUser.classList.add('block')
            let wrap = document.getElementsByClassName('wrap')[0]
            wrap.appendChild(divUser)
            let anchor = document.createElement('a')
            anchor.innerText = 'Details'
            anchor.href = `./html/user-details.html?data=${JSON.stringify(userItem)}`
            divUser.append(userText, anchor)
        }
    })