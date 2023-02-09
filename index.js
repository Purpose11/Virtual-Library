

const formInput = document.querySelectorAll('form input');
const submitBtn = document.getElementById('submit-btn');
const select = document.getElementById('book-status');
const addBtn = document.getElementById('Add-btn')
const buttons = document.querySelectorAll('.header button')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const libr = document.querySelector('.library')
let arr = [];

submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // prevent the form from being submitted
    let isFormValid = true;

    formInput.forEach(function (input) {
        if (!input.value) {
            isFormValid = false;
        } else {
            arr.push(input.value);
            input.value = '';
        }
    });

    if (!isFormValid) {
        alert('Please fill out all the fields.');
    } else {
        arr.push(select.value);
        takeInput();
        console.log(arr);
        arr = [];
    }
});

//to display book conatainer
        buttons.forEach (function (button){
            button.addEventListener('click', showContainer)
        })


function showContainer(e){
    if (e.target === addBtn){
        container.classList.toggle('hide')
    }

    if (e.target.id === 'View-btn'){
        if (libr.children.length === 0){
            alert('Please Add a Book!')
            libr.style.display= 'none'
        }
        else{

             if (libr.style.display === 'grid'){
             libr.style.display = 'none'
        
        }
        else
        {
            libr.style.display = 'grid'
          
        }  
        }
    }
        
}

// to store  our input inside a div
function takeInput() {
    const button = document.createElement('button')
    const div = document.createElement('div');
    libr.appendChild(div)
    div.classList.add('myDiv');
    const title = document.createElement('h1')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    div.appendChild(title)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(button)
    title.innerText = arr[0]
    p1.innerText =  'By' + " " + arr[1]
    p2.innerText = arr[2] + " "+  'Pages'
    p3.innerText = arr[3]
    button.innerText = 'DELETE'
    alert('Book has been successfully saved!')

    button.addEventListener('click', function deleteBook(){
        confirmDelete()
    }) 

//delete book
    function confirmDelete (){
        const newDiv =  document.createElement('div')
        document.body.appendChild(newDiv)
        newDiv.classList.add('newDiv')
        newDiv.innerHTML = ` Are you sure you want to delete ${title.innerText} ? <br> <button>NO</button> <button>YES</button>`
        newDiv.style.backgroundColor = '#b01f35'
        newDiv.style.color = 'white'
        const deleteBookBtn = document.querySelectorAll('.newDiv button')
        deleteBookBtn.forEach( function (btn){
            btn.addEventListener('click', (e)=>{
                if (e.target.innerHTML === 'YES'){
                    div.remove()
                    newDiv.style.display = 'none'
                    alert('Book Deleted Sucessfully!')

                    if (libr.children.length === 0){
                        libr.style.display = 'none'
                    }
                }else{
                    newDiv.style.display = 'none'
                }
            })
        })
    
    }
      
}
   
















