const personInfo = document.querySelector('.person-info')
const personName = document.querySelector('.personName')
const personProfession = document.querySelector('.personProfession')
const image = document.querySelector('.image2')

const personDetails = [
    {
        id: 1,
        Name: 'Tanya Sinclair',
        job: "UX Engineer",
        img: './images/image-tanya.jpg',
        info: `“ I’ve been interested in coding for a while but never taken the
        jump, until now. I couldn’t recommend this course enough. I’m now in
        the job of my dreams and so excited about the future. ”`


    },
    {
        id: 2,
        Name: 'John Tarkpor',
        job: "Junior Front-end Developer",
        img: './images/image-john.jpg',
        info: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`


    },
]

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function(){
    const Item = personDetails[currentItem]
    personBio(currentItem)
  
})

function personBio(data){
    const Item = personDetails[data]
    personInfo.textContent = Item.info
    image.src = Item.img
    personName.textContent = Item.Name
    personProfession.textContent = Item.job

}

next.addEventListener('click', function(){
    currentItem++
    if(currentItem > personDetails.length-1){
        currentItem=0
    }
    personBio(currentItem)

})
prev.addEventListener('click',function(){
    currentItem--
    if(currentItem < 0){
        currentItem = 1

    }
    personBio(currentItem)
})