let url = new URL(location.href)
let post = JSON.parse(url.searchParams.get('data'))

let header = document.createElement('div')
header.classList.add('header')
header.innerHTML = `<h1>Post Details</h1>`
document.body.appendChild(header)

let div = document.createElement('div')
div.classList.add('postInfo')
div.innerHTML = `<h2>User ID: ${post.userId}</h2>
            <h3>Post ID: ${post.id}</h3>
            <h3>Title: ${post.title}</h3>
            <p>Post: ${post.body}</p>`
document.body.appendChild(div)

let commentDiv = document.createElement('div')
commentDiv.classList.add('commentDiv')
document.body.appendChild(commentDiv)

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (let comment of comments) {
            let block = document.createElement('div')
            block.classList.add('comment')
            block.innerHTML = `<h3>Post ID: ${comment.postId}</h3>
            <h2>Comment ID: ${comment.id}</h2>
            <h3>Name: ${comment.name}</h3>
            <p>Comment: ${comment.body}</p>`
            commentDiv.appendChild(block)
        }
    })