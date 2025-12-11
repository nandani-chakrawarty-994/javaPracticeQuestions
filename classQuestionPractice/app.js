

// question 1

// function afterDelay(time, cb){
//     setTimeout(function(){
//         cb();
//     },time)
// }

// afterDelay(2000, function(){
//     console.log('Callback executed')
// })

// question 2

// function getUser(username, cb){
//     setTimeout(function(){
//         cb({id: 1, username: 'nandani'})
//     },1000)
// }
// function getUserPost(id, cb){
//     setTimeout(function(){
//         cb(['img1', 'img2', 'img3'])
//     },1000)
// }
// getUser('kartik', function(data){
//     getUserPost(data.username, function(images){
//         console.log(images)
//     })
// })

// question 3

function loginUser (cb){
    setTimeout(function(){
        cb({})
    },1000)
}

function fetchPermissions(userId, cb){
    setTimeout(function() {
        cb(['true', 'false'])
    },1000)
}

function loadDasboard() {

}

loginUser(function(data){
    fetchPermissions(userId, function(info){
        loadDasboard(isPermit, function(){
            console.log('dashboard loaded')
        })
    })
})