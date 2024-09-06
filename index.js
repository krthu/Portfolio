const menuItems = document.getElementsByClassName('menu-item');
const contentElements = document.getElementsByClassName('content')

for (let item of menuItems) {
    item.addEventListener('click', () => {
        changeContent(item.id)
        changeSelectedMenuItem(item.id)
    })
}

const changeContent = (menuID) => {

    const contentID = menuID + '-content'
    for (let element of contentElements){   
        if (element.id === contentID){
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }
}

const changeSelectedMenuItem = (itemID) => {
    for (let element of menuItems) {
        if (element.id === itemID){
            element.classList.add('selected-item')
        } else {
            element.classList.remove('selected-item')
        }
    }
}