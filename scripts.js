//cuisines object
let cuisines = [
    'Vegetarian',
    'Venezuelan',
    'Vietnamese',
    'Wings'
]
//selectors
const cuisineDiv = document.querySelector('.cuisinesList');
const addBtn = document.querySelector('.btn--add');
const changeBtn = document.querySelector('.btn--change');
const addText = document.querySelector('.inputText');
const cuisineList = document.querySelector('.cuisinesList');
const listElement = document.querySelectorAll('.listElement')
// functions
const addElementFunction = ((el, i) =>
    cuisineDiv.insertAdjacentHTML('afterbegin', `<li class="listElement" data-cuisineNumber="${i}"><span class="listElement--name" id='${i}'>${el}</span><img src="img/remove.png" alt="remove" class="iconRemove__icon icon hidden" data-id="${i}"><img src="img/edit.png" alt="edit" class="iconEdit__icon icon hidden" data-id="${i}"></li>`)
);

// updateUI
const updateUI = function () {
    cuisineList.querySelectorAll('li').forEach(el => el.parentNode.removeChild(el))
    cuisines.forEach((element, i) => addElementFunction(element, i));
}

/** --------------- Functionality ---------------- **/
// init
updateUI()

const capitalizeFirst = function (word) {
    let wordToArray = [...word];
    wordToArray[0] = wordToArray[0].toUpperCase();
    let newWord = wordToArray.toString().replace(/,/g, '');
    return newWord
}

// add button functionality
addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (addText.value) {
        const addTextValue = addText.value
        let capitalizedAddTextValue = capitalizeFirst(`${addTextValue}`)
        cuisines.push(`${capitalizedAddTextValue}`);
        updateUI();
    } else {
        return
    }

})
// mouse hover functionality
cuisineList.addEventListener('mouseover', function (e) {
    const hovered = e.target.closest('li');
    if (hovered) {
        if (hovered.classList.contains('listElement')) {
            hovered.children[1].classList.remove('hidden');
            hovered.children[2].classList.remove('hidden');
        }
    }

})

cuisineList.addEventListener('mouseout', function (e) {
    const hovered = e.target.closest('li');
    if (hovered) {
        if (hovered.classList.contains('listElement')) {
            hovered.children[1].classList.add('hidden');
            hovered.children[2].classList.add('hidden');
        }
    }
})

// remove button functionality
cuisineList.addEventListener('click', function (e) {
    const clicked = e.target.closest('.iconRemove__icon');
    if (clicked) {
        const idNumber = clicked.dataset.id;
        cuisines.splice(idNumber, 1)
        updateUI();
    }
})

// edit button functionality
cuisineList.addEventListener('click', function (e) {
    const clicked = e.target.closest('.iconEdit__icon')
    if (clicked) {
        const cuisineToEdit = document.getElementById(`${clicked.dataset.id}`)
    }
})
