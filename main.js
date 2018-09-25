let house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

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

const sortCard = () => {
    newString = `<div class="d-flex justify-content-center">
<form class="text-light bg-secondary w-50 p-3">
    <div class="form-group">
        <h2>Enter First Year's Name</h2>
        <label for="studentInput">Student</label>
        <input type="text" class="form-control" id="studentInput" placeholder="Enter Name">
    <button type="submit" id="sortButton" class="btn btn-primary btn-pull-right w-25">Sort</button>
    </div>
</form>
</div>`;

    printToDom(newString, 'letsGetStarted')
}
const buildNewStudentCard = (sort) => {
    let newHouse = Math.floor((Math.random() * house.length));
    let domString = `<div class="card w-25 m-2">
        <div class ="card-body">
        <h5 class="card-title">${sort}</h5>
        <p> Your new house is... ${house[newHouse]}</p>
        <button href="#" class="btn btn-danger deleteButton">Expel!</button>
      </div>
      </div>`;

    printToDom(domString, 'wizzardCard');
    activateDeletes();
}

document.getElementById('firstButton').addEventListener('click', function (e) {
    e.preventDefault()
    sortCard();
});
document.getElementById('letsGetStarted').addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.id === 'sortButton') {
        let nameInput = document.getElementById("studentInput");
        buildNewStudentCard(studentInput.value)
    }
});