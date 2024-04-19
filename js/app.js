let formWork = document.getElementById("koper")
let forAdmin = document.getElementById("add")
let admin = [] ;

formWork.addEventListener("submit" , (e) => {
    const information = {
        name : e.target.fullName.value ,
        age : e.target.age.value ,
        freeTime : e.target.freeTime.value ,
        salary : e.target.slary.value ,
    };

    admin.push(information)

    information.forEach((item , index) => {
        let commentBox = document.createElement('div')
        commentBox.style.border = '2px solid black'
        commentBox.style.backgroundColor = 'gray'
        commentBox.innerText = item.body ;
    
        forAdmin.appendchild(commentBox)
    });

    e.preventDefault()

});