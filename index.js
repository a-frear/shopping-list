function addItems() {
    $('#js-shopping-list-form').submit(function (event) {
        // when an item is entered, stop the default form submission 
        event.preventDefault();
        //take the text (newItem) from the input field id "shopping-list-entry" and append it on the ul class "shopping-list"
        //create variable out of the text that was entered
        const newItem = $(this).find('input[name="shopping-list-entry"]').val();
        //append newItem to the shopping list
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
            </li>`
        );
    });
}

$(addItems);

function checkItems() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        //toggle the element off/on of css class .shopping-item__checked
        const itemCheck = $(this).closest("li").find(".shopping-item");
        // toggle 
        itemCheck.toggleClass("shopping-item__checked"); 
    }
    );
}

$(checkItems);

function deleteItems() {
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        //remove the item from the list
        //create the variable
        const itemDelete = $(this).closest("li")
        //remove this item from the list
        itemDelete.remove();
    });
}

$(deleteItems);