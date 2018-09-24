let house  = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

const studentInputElm = document.getElementById('studentInputElm');
// const letsStartSortingElm = document.getElementById('letsStartSortingElm');

const sortButtonElm = document.getElementById('sortButton');
const letsStartSortingElm = document.getElementById('letsStartSortingButton');

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');

    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
        })
    }

}

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;

}
    const buildNewStudentCard = (sort) => {
        let newHouse = Math.floor((Math.random()*house.length));
        let domString = `<div class="card w-25 m-2">
        <div class ="card-body">
        <h5 class="card-title">${sort}</h5>
        <p> Your new house is... ${house[newHouse]}</p>
        <button href="#" class="btn btn-danger deleteButton">Delete!</button>
      </div>
      </div>`;

        printToDom(domString, 'wizzardCard');
        activateDeletes();
    }

    sortButtonElm.addEventListener("click", (e) => {
        e.preventDefault();

        buildNewStudentCard('');
    });