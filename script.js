// var inputUrl = document.getElementById('inputUrl')
// var submit = document.getElementById('submit')
// var i = 1
// function adlist() {
//     let img = inputUrl.value
//     const output = document.getElementById('output')

//     let row = document.createElement('div')
//     row.classList.add('row')
//     row.classList.add('d-flex')


//     let column = document.createElement('div')
//     column.classList.add('col-3')
//     let container = document.createElement('div')
//     container.classList.add('container')
//     let pic = document.createElement('div')
//     pic.classList.add('m-1')
//     pic.innerHTML = '<img src="' + img + '" height="250px" wide="250px">'
//     container.appendChild(pic)
//     column.appendChild(container)
//     row.appendChild(column)
//     if (i < 5) {
//         output.appendChild(column)
//         i++
//     } else {
//         output.appendChild(row)
//         if(i>1){
//         i=0
//         }else{
            
//         }
//     }

// }
// submit.addEventListener('click', adlist)

var inputText = document.getElementById('submit')
var output = document.getElementById('output')
var cout = document.getElementById('count')
var inputName = document.getElementById('inputName')
var inputDescription = document.getElementById('inputDescription')
var inputUrl = document.getElementById('inputUrl')
var num = 0

function addText() {
    let text = inputText.value
    let pic = inputUrl.value
    let name = inputName.value
    let des = inputDescription.value
    console.log(text)
    let newButton = document.createElement('div')
    document.getElementById('test'+num+'').innerHTML= `


    <div  class="section_item_img">

        <div class="a">
        <img src="`+ pic + `" height="200px" wide="200px">
        </div>
        <div class="b">
        `+name+`
        </div>
        <div class="b">
        `+des+`
        </div>




    </div>
        `
    num++
    if(num==12)
    num=0
}
inputText.addEventListener('click', addText)