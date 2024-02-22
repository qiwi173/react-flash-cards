const { post } = require("../../routes/index.router")

const formAnswer= document.querySelector('.formAnswer')
if(formAnswer){
    formAnswer.addEventListener('submit',async(e)=>{
        e.preventDefault()
        const {answer}=e.target
        const data={
            answer:answer.value
        }
        const response=await fetch(`/api/topic/${id}`,{
            method:'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        })
        const res=await response.json()
        if(res.message==='success'){
            document.querySelector(".container").insertAdjacentHTML("beforeend",res.html)
            
        }
    })
}