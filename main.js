const studentInputElm = document.getElementById('studentInputElm');
// const letsStartSortingElm = document.getElementById('letsStartSortingElm');

const sortButtonElm = document.getElementById('sortButton');
const letsStartSortingElm = document.getElementById('letsStartSortingButton');


// document.getElementById("sortButton").addEventListener("click", function (e) {
//     studentInputElm.innerHTML = `you clicked the button'"$(e.target.id}"`;
// });
const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);

    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
            console.log("they clicked delete!!");
        })
    }

}

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;

}
    const buildNewStudentCard = (sort) => {
        let domString = `<div class="card w-25 m-2">
        <div class ="card-body">
        <h5 class="card-title">${sort}</h5>
        <button href="#" class="btn btn-danger ">You got Ravenclaw!</button>
      </div>
      </div>`;

        printToDom(domString, 'wizzardCard');
        activatesDeletes();
    }

    sortButtonElm.addEventListener("click", (e) => {
        e.preventDefault();

        buildNewStudentCard('');
    });