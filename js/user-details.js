let url = new URL(location.href)
let user = JSON.parse(url.searchParams.get('data'))

let header = document.createElement('div')
header.classList.add('header')
header.innerHTML = `<h1>User Details</h1>`
document.body.appendChild(header)

function userInfo(point) {
    for (let pointKey in point) {
        let pointContainer = document.createElement('div');
        pointContainer.classList.add('block');

        let keyValueContainer = document.createElement('div');
        let value = point[pointKey];
        if (typeof value === 'object' && !Array.isArray(value)) {
            userInfo(value);
            continue;
        }
        keyValueContainer.innerText = `${pointKey}: ${value}`;

        pointContainer.appendChild(keyValueContainer);
        document.body.appendChild(pointContainer);

        if (typeof point[pointKey] === 'object' && Array.isArray(value)) {
            userInfo(point[pointKey]);
        }
    }
}

userInfo(user)

let btn = document.createElement('button')
btn.innerText = 'Post of current user'
btn.classList.add('btn')
document.body.appendChild(btn)

btn.onclick = function () {
    let div = document.createElement('div')
    div.classList.add('posts')
    document.body.appendChild(div)
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (let post of posts) {
                let block = document.createElement('h3')
                block.innerText = post.title
                block.classList.add('post')
                div.append(block)

                let btnPost = document.createElement('a')
                btnPost.innerText = 'Post Details'
                btnPost.href = `../html/post-details.html?data=${JSON.stringify(post)}`
                btnPost.classList.add('btnPost')
                block.appendChild(btnPost)
            }
        })
    btn.disabled = true;
}

