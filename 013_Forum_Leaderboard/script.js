const forumLatest="https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json"
const forumTopicUrl="https://forum.freecodecamp.org/t/"


function sendFetchReq(){
    fetch(forumLatest)
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    
})
}
sendFetchReq(forumLatest)
sendFetchReq(forumTopicUrl)