const adminUser="UF";
const adminPass="600315";

function login(){

let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u===adminUser && p===adminPass){

document.getElementById("login").style.display="none";
document.getElementById("panel").style.display="block";

}else{

alert("Wrong login");

}

}

function addPost(){

let title=document.getElementById("title").value;
let content=document.getElementById("content").value;
let logo=document.getElementById("logo").value;
let image=document.getElementById("image").value;

let post={title,content,logo,image};

let posts=JSON.parse(localStorage.getItem("posts"))||[];

posts.push(post);

localStorage.setItem("posts",JSON.stringify(posts));

alert("Post Published");

}

function showPosts(){

let posts=JSON.parse(localStorage.getItem("posts"))||[];

let html="";

posts.reverse().forEach(p=>{

html+=`
<div class="post">

${p.logo?`<img src="${p.logo}" width="60">`:""}

<h2>${p.title}</h2>

<p>${p.content}</p>

${p.image?`<img src="${p.image}">`:""}

</div>
`;

});

let postBox=document.getElementById("posts");

if(postBox) postBox.innerHTML=html;

}

showPosts();
