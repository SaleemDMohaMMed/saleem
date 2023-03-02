//store the values from user 
const form=document.getElementById('form')
const input=document.getElementById('input')
const error=document.getElementById('error')
const posts=document.getElementById('posts')
form.addEventListener('click',(e)=>{
    e.preventDefault()
    formValidation()
})

const formValidation=()=>{
    if(input.value===''){
        console.log('error')
        error.innerHTML='Please enter the text'
    }
    else{
        console.log('success')
        error.innerHTML=''
        acceptData()
        showData()
    }
} 

let data={}
const acceptData=()=>{
    data['name']=input.value
    console.log(data)
}
const showData=()=>{
    posts.innerHTML+=
    `<div>
    <p>${data.name}</p>
    <span class="buttons">
        <i onClick='deleteData(this)' class="fa-solid fa-trash"></i>
        <i onClick='editData(this)' class="fa-solid fa-user-pen"></i>
    </span>
</div>`
input.value=''
}

const deleteData=(e)=>{
    e.parentElement.parentElement.remove()
}
const editData=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}