let tableContainer = document.getElementById('myTable');
function createTable() {
    //Write your code here
    let row = +(prompt('Input number of rows'))
    let col = +(prompt('Input number of columns'))

    for (let i = 0; i < row; i++) {
        let newRow = tableContainer.insertRow(`${i}`);
        for (let j = 0; j < col; j++) {
            let newCell = newRow.insertCell(`${j}`);
            newCell.innerHTML = `Row-${i} Column-${j}`;
        }
    }
}
