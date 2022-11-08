const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById(`container`);


for (i = 0; i < posts.length; i++){
        // console.log(posts[i]);
        // console.log(posts[i].id);
        // console.log(posts[i].content);
        // console.log(posts[i].author.name);
        // console.log(posts[i].author.image);
        // console.log(posts[i].likes);
        // console.log(posts[i].created);

        // ----------
        // HEADER
        // ----------

        // Creare un div per ogni post
        const postBox = document.createElement(`div`);
        postBox.classList.add(`post`);
        container.appendChild(postBox);

        // Creare un header per ogni post
        const headerBox = document.createElement(`div`);
        headerBox.classList.add(`post__header`);
        postBox.appendChild(headerBox);

        // Creare un div all'interno dell'header
        const headerBoxMeta = document.createElement(`div`);
        headerBoxMeta.classList.add(`post-meta`);
        headerBox.appendChild(headerBoxMeta);

        // Due div all'interno dell'header
        // Creare un div all'interno di headerBoxMeta
        const postMetaIcon = document.createElement(`div`);
        postMetaIcon.classList.add(`post-meta__icon`);
        headerBoxMeta.appendChild(postMetaIcon);
        const userProfilImg = document.createElement(`img`);
        userProfilImg.classList.add(`profile-pic`)
        userProfilImg.src = posts[i].author.image;
        postMetaIcon.appendChild(userProfilImg);

        // Creare un div all'interno dell'header (stesso livello di headerBoxMeta)
        const postMetaData = document.createElement(`div`);
        postMetaData.classList.add(`post-meta__data`);
        headerBoxMeta.appendChild(postMetaData);

        // Due div all'interno di postMetaData
        // Creare un div all'interno di postMetaData
        const postMetaAuthor = document.createElement(`div`);
        postMetaAuthor.classList.add(`post-meta__author`);
        postMetaAuthor.innerHTML = posts[i].author.name;
        postMetaData.appendChild(postMetaAuthor);

        // Creare un altro div all'interno di postMetaData
        const postMetaTime = document.createElement(`div`);
        postMetaTime.classList.add(`post-meta__time`);
        postMetaTime.innerHTML = posts[i].created;
        postMetaData.appendChild(postMetaTime);

        // TESTO DEL POST
        // Creare un div all'interno di postBox
        const postText = document.createElement(`div`);
        postText.classList.add(`post__text`);
        postText.innerHTML = posts[i].content;
        postBox.appendChild(postText);
        
        // IMMAGINE DEL POST
        // Creare un div all'interno di postBox
        const postImg = document.createElement(`img`);
        postImg.classList.add(`post__image`);
        postImg.src = posts[i].media;
        postBox.appendChild(postImg);

        // FOOTER DEL POST
        // Creare un div per il footer
        const footerPost = document.createElement(`div`);
        postBox.appendChild(footerPost);

        // Creare un div all'interno del footer
        const likeBox = document.createElement(`div`);
        likeBox.classList.add(`likes`);
        footerPost.appendChild(likeBox);
        
        // Creare due div all'interno di likeBox
        // 1°div
        const likeCta = document.createElement(`div`);
        likeBox.appendChild(likeCta);
        // Creare link all'interno di likeCta
        const myLikeButton = document.createElement(`a`);
        myLikeButton.innerHTML = `Mi piace`;
        myLikeButton.classList.add(`like-button`, `js-like-button`)
        likeCta.appendChild(myLikeButton);

        // 2°div
        const likeCounter = document.createElement(`div`);
        likeCounter.innerHTML = `Piace a ` + (posts[i].likes) + ` persone`;
        likeBox.appendChild(likeCounter);


        }

        
        
        





























        // for (let key in posts[i]){
            
        // }
    



    // for (let key in posts[i]){
    //     console.log(key, posts[i][key]);
    //     if (key === `author`){
    //         for (let key in author){
                
    //         }
    //         // const postHeaderBox = document.createElement(`div`);
    //         // let author = posts[i][key];
    //         // postHeaderBox.append(author);
    //         // container.appendChild(postHeaderBox);
    //     }   
        
    //     }






// if (key === `author`){
        //     let authorData = key;
        //     for (let key in authorData){
        //         console.log(authorData[key]);
        //     } 