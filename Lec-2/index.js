const express = require('express')
const app = express();
//Just like Math.random Math.sqrt etc
const port = 4000 // Total 65535 port hote h
require('dotenv').config()

const data = {
    
        "login": "karan030204",
        "id": 112721868,
        "node_id": "U_kgDOBrf_zA",
        "avatar_url": "https://avatars.githubusercontent.com/u/112721868?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/karan030204",
        "html_url": "https://github.com/karan030204",
        "followers_url": "https://api.github.com/users/karan030204/followers",
        "following_url": "https://api.github.com/users/karan030204/following{/other_user}",
        "gists_url": "https://api.github.com/users/karan030204/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/karan030204/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/karan030204/subscriptions",
        "organizations_url": "https://api.github.com/users/karan030204/orgs",
        "repos_url": "https://api.github.com/users/karan030204/repos",
        "events_url": "https://api.github.com/users/karan030204/events{/privacy}",
        "received_events_url": "https://api.github.com/users/karan030204/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Karan Dattani",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 31,
        "public_gists": 0,
        "followers": 6,
        "following": 3,
        "created_at": "2022-09-02T17:30:46Z",
        "updated_at": "2024-02-02T13:32:44Z"
      
}

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/twitter', (req,res)=>{
    res.send('dattanikaran25')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please Login Bhai</h1>')
})

//We need to restart the server after making any changes in the code

app.get('/youtube' , (req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github', (req,res)=>{
    res.json(data)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${port}`);
})
