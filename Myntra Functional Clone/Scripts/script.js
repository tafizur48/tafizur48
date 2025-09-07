let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();

}


function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0) {
        console.log('i am here');
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText  = bagItems.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
    // if(bagItems)
    //     bagItemCountElement.innerText = bagItems.length;

function displayItemsOnHomePage() {

    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }

let innerHtml = ' ';
items.forEach(item => {
    innerHtml +=`
        <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="company_name">${item.company}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="current_price">Rs ${item.current_price}</span>
                <span class="original_price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
        <button class="btn-add-bag" onclick = "addToBag (${item.id})"> <span class="material-symbols-outlined place">
        local_mall
        </span>ADD TO BAG</button>
            </div>`;

});

itemsContainerElement.innerHTML = innerHtml;
}


// let itemsContainerElement = document.querySelector('.items_container');

// let innerHtml = ' ';
// items.forEach(item => {

//     innerHtml +=`
//         <div class="items_container">
//             <img class="items_image" src="${item.image}" alt="item image">
//             <div class="rating">
//                 ${item.rating.stars} ⭐ | ${item.rating.count}
//             </div>
//             <div class="company_name">${item.company}</div>
//             <div class="item_name">${item.item_name}</div>
//             <div class="price">
//                 <span class="current_price">Rs ${item.current_price}</span>
//                 <span class="original_price">Rs ${item.original_price}</span>
//                 <span class="discount">(${item.discount_percentage}% OFF)</span>
//             </div>
//         <button class="btn-add-bag" onclick = "addToBag">Add to Bag</button>
//             </div`;

// });

// itemsContainerElement.innerHTML = innerHtml; 

// itemsContainerElement.innerHTML = `
// <div class="item_container">
//     <img class="item_image" src="${item.image}" alt="item image">
//     <div class="rating">
//         ${item.rating.stars}⭐ | ${item.rating.count}
//     </div>
//     <div class="company_name">${item.company}</div>
//     <div class="item_name">${item.item_name}</div>
//     <div class="price">
//         <span class="current_price">Rs ${item.current_price}</span>
//         <span class="original_price">Rs ${item.original_price}</span>
//         <span class="discount">(${item.discount_percentage}% OFF)</span>
//     </div>
//     <button class="btn-add-bag">Add to Bag</button>
//     </div>`;


/* <div class="items_container">

</div>`
*/