let itemLeft = 0

//draggability of lists
const dragArea = document.querySelector('.listContainer')
new Sortable(dragArea, {
    Animation: 3500
})

//dark mode, light mode
$(document).ready(function () {

    $('.sun').click(function () {
        $('body').css("background-color", "hsl(0, 0%, 98%)");
        $('.sun').hide();
        $('.moon').show();
        $('input').css({ "background-color": "hsl(0,0%,98%)", "color": "black" });
        $('.listContainer').css({ "background-color": "white", "color": "black" });
        $('.filter').css({ "background-color": "hsl(0,0%,98%)", "color": "black" });
    });
    $('.moon').click(function () {
        $('body').css("background-color", "hsl(235, 21%, 11%)");
        $('input').css({ "background-color": "hsl(235, 24%, 19%)", "color": "white" });
        $('.listContainer').css({ "background-color": "hsl(235, 24%, 19%)", "color": "gray" });
        $('.filter').css({ "background-color": "hsl(235, 24%, 19%)", "color": "gray" });
        $('.sun').show();
        $('.moon').hide();
    });

    //adding elements
    $('input').keypress(function (e) {
        if (e.key == 'Enter') {
            $('.listContainer').children().length += 1
            console.log($('.listContainer').children().length)
            $('.leftItem').text(`${$('.listContainer').children().length} item left`)

            
            
            if (e.target.value.trim() == '') {
                return
            }
            $('.listContainer').prepend(`
            <div class="listItem"> 
            <span onclick="checkItem(event)" class="checkContainer"></span> 
            ${e.target.value} 
            <img class="cross" onclick="deleteItem(event)" src="./images/icon-cross.svg" alt=""> 
            </div>`);
            e.target.value = ""
            itemLeft = $('.listItem').length
        }
        
    });
    
});




//deleting items
function deleteItem(e) {
    e.target.parentElement.remove()
    let decreamentedItemLeft = itemLeft -= 1
    $('.leftItem').text(decreamentedItemLeft + ' items left')
}


//marking as done
function checkItem(e) {
    e.target.parentElement.classList.toggle('checked')
}


//clear completed and x item left
$('.clearCompleted').click(()=>{
    let items = document.querySelectorAll('.listItem')
    items.forEach(item=>{
        if(item.classList.contains('checked')){
            item.remove()
        }
    })
    itemLeft = $('.listItem').length
    $('.leftItem').text(itemLeft + ' items left')
})


//completed filter
$('.completed').click(function () { 
    let listItems = document.querySelectorAll('.listItem')
    console.log(listItems)
    listItems.forEach(function(listItem){
        listItem.style.display = 'flex'
        if(listItem.classList.contains('checked') == false){
            listItem.style.display = 'none'
        }
    })
    
});

$('.Active').click(function () { 
    let listItems = document.querySelectorAll('.listItem')
    console.log(listItems)
    listItems.forEach(function(listItem){
        listItem.style.display = 'flex'
        if(listItem.classList.contains('checked')){
            listItem.style.display = 'none'
        }
    })
    
});



$('.all').click(function () { 
    let listItems = document.querySelectorAll('.listItem')
    listItems.forEach(function(listItem){
        listItem.style.display = 'flex'
    })
    
});
//input, close, items left, filter


