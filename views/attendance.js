const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/student',
    
  });

document.getElementById('date').addEventListener('submit',checkDate)
const display = document.getElementById('display')
const ul = document.querySelector('ul')

document.querySelector("#display form").addEventListener('submit' , uploadAttendence)

let attendence = []

var date ;
async function checkDate(e){
    e.preventDefault();
    date = e.target.getdate.value;
    console.log(date)
    try{
        const res = await axiosInstance.post('/getdate' ,{date})
        console.log(res)
        ul.innerHTML = ``
        attendence = []
        if(!res.data.success){
        res.data.students.forEach(student =>{
            console.log(student)
            attendence.push({id : student.id , present : false})
            displayStudents(student)            
        })
        document.querySelector('#display button').classList.remove("hide")
    }else{
            res.data.students.forEach(student =>{
                showUsers(student)            
            })  
        }
    
    }catch(e){
        console.log(e)
    }
}

function displayStudents(student){
    const li = document.createElement('li')
    li.textContent = student.name
    const pInput = document.createElement('input')
    const pLabel = document.createElement('label')
    pInput.type = "radio"
    pInput.name = student.id
    pInput.value = "present"
    pInput.required = true
    pLabel.textContent = "present"
    
    const aInput = document.createElement('input')
    const aLabel = document.createElement('label')
    aInput.type = "radio"
    aInput.name = student.id
    aInput.value = "absent"
    aInput.required = true
    aLabel.textContent = "absent"

    li.appendChild(pInput)
    li.appendChild(pLabel)
    li.appendChild(aInput)
    li.appendChild(aLabel)


    ul.appendChild(li)

}


async function uploadAttendence(e){
    e.preventDefault()
    console.log(e.target)
    console.log(e.target[0])
    const result = attendence.map(elem => {
        let radio = document.getElementsByName(elem.id)
        if(radio[0].checked){
            elem.present = true
            console.log(elem.id + " : " + radio[0].value)
        }else{
            elem.present = false
            console.log(elem.id + " : " + radio[1].value)
        }
        // console.log(radio)
        // console.log(elem.id + " : ")
        // let temp = elem.name + elem.id
        // console.log(temp)
        // console.log(e.target.temp)
        return elem
    })
    console.log("-----")
    console.log(result)
    const res = await axiosInstance.post('/attendence' , {data : result , date})
    if(res.status == 200){
        ul.innerHTML =``
        res.data.forEach(user =>{
            showUsers(user)
        })
    }
    console.log(res)
}



function showUsers(user){
    console.log(user.id)
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = user.name
    
    li.appendChild(p)
    
    const p2 = document.createElement('p')
    if(user.record.present){

        p2.innerHTML = `&#x2714; present`
    }else{
        p2.innerHTML = `&#10008; absent`

    }
    li.appendChild(p2)

    ul.appendChild(li)
  }
