let wrap = document.createElement('div')
wrap.classList.add('wrap')
document.body.appendChild(wrap)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (let userItem of value) {
            let imgDiv = document.createElement('div')
            let divUser = document.createElement('div')
            let userText = document.createElement('h2')
            imgDiv.innerHTML = `<img class="img" src="/img/pngwing.com%20(1).png" alt="user">`
            userText.innerText = `${userItem.id} ${userItem.name}`
            imgDiv.classList.add('imgDiv')
            divUser.classList.add('block')
            let wrap = document.getElementsByClassName('wrap')[0]
            wrap.appendChild(divUser)
            let anchor = document.createElement('a')
            anchor.innerText = 'Details'
            anchor.href = `./html/user-details.html?data=${JSON.stringify(userItem)}`
            divUser.append(imgDiv, userText, anchor)
        }
    })
