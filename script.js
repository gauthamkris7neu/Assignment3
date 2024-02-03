function Title(t1) {
    this.mytitle = t1;
}

Title.prototype.getName = function () {
    return this.mytitle;
};

var socialMedia = {
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    flickr: "http://flickr.com",
    youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

window.onload = function () {
    const dropDownTextAreas = document.querySelectorAll('.dropDownTextArea');
    dropDownTextAreas.forEach(function (row) {
        row.style.display = 'none';
    });
    displayDetails();
};

function displayDetails() {
    const fullName = 'Gautham Venkata Krishna Prasad';
    const nuid = '002249901';

    document.getElementById('fullNameDisplay').textContent = `Full Name: ${fullName}`;
    document.getElementById('nuidDisplay').textContent = `NUID: ${nuid}`;
}

function addrecord() {
    var table = document.getElementById("myTable");

    var studentName =
        table.lastElementChild.lastElementChild?.previousElementSibling
            ?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";

    var lastIndex = studentName.split(" ")[1];

    const row = table.insertRow(-1);
    row.innerHTML = `
        <td><input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img src="./down.png" width="25px" onclick="tableView(this)"></td>
        <td>Student ${parseInt(lastIndex) + 1}</td>
        <td>Teacher ${parseInt(lastIndex) + 1}</td>
        <td>Approved</td>
        <td>Fall</td>
        <td>TA</td>
        <td>12345</td>
        <td>100%</td>
    `;

    const dropdownRow = table.insertRow(-1);
    dropdownRow.className = 'dropDownTextArea';
    dropdownRow.innerHTML = `
        <td colspan="8">
            Advisor: ${parseInt(lastIndex) + 1}<br /><br />
            Award Details<br />
            Summer 1-2014(TA)<br />
            Budget Number: <br />
            Tuition Number: <br />
            Comments:<br /><br /><br />
            Award Status:<br /><br /><br />
        </td>
    `;
    dropdownRow.style.display = "none";

}

function tableView(element) {


    var detailRow = element.parentElement.parentElement.nextElementSibling;

    if (detailRow.style.display === "none" || detailRow.style.display === "") {
        detailRow.style.display = "table-row";
    } else {
        detailRow.style.display = "none";
    }
}

let myarray = 0;

function onClickCheckBox(checkBox) {

    var table = document.getElementById("myTable");
    var selcheckboxrow = checkBox.parentElement.parentElement;
    var getTableHeadingRow = table.lastElementChild.firstChild;

    var checkedElms = table.querySelectorAll(":checked").length;

    if (checkBox.checked == true) {
        selcheckboxrow.style.backgroundColor = "Yellow";
        if (checkBox.checked == true && checkedElms <= 1) {
            var deleteBtnRowHeading = document.createElement("th");
            deleteBtnRowHeading.innerHTML = "Delete";
            getTableHeadingRow.appendChild(deleteBtnRowHeading);
            var editBtnRowHeading = document.createElement("th");
            editBtnRowHeading.innerHTML = "Edit";
            getTableHeadingRow.appendChild(editBtnRowHeading);
        } else if (checkBox.checked == false && checkedElms > 1) {
        }

        var deleteButton = document.createElement("td");

        deleteButton.innerHTML =
            '<button id="deleted" type="button" onClick="onDeleteRow(this)" >Delete</button>';

        selcheckboxrow.appendChild(deleteButton);

        var editButton = document.createElement("td");

        editButton.innerHTML =
            '<button id="edited" type="button" onClick="onEditRow(this)"><img src="./pencil.png" width="20px"></button>';

        selcheckboxrow.appendChild(editButton);
    } else {
        selcheckboxrow.style.backgroundColor = "White";

        selcheckboxrow.deleteCell(9);
        getTableHeadingRow.deleteCell(9);

        selcheckboxrow.deleteCell(8);
        getTableHeadingRow.deleteCell(8);
    }

    if (checkedElms >= 1) {
        document.querySelector("#button").disabled = false;
    } else {
        document.querySelector("#button").disabled = true;
    }
}

function onDeleteRow(deleteButtonRef) {
    var table = document.getElementById("myTable");
    var getTableHeadingRow = table.lastElementChild.firstChild;
    myarray += 1;

    var selectedRow = deleteButtonRef.parentElement.parentElement;
    var index = selectedRow.rowIndex;

    if (confirm("Do you really want to delete this Row ?")) {
        document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
        var index3 = table.querySelectorAll(":checked").length;
        if (index3 == 0) {
            getTableHeadingRow.deleteCell(-1);
            getTableHeadingRow.deleteCell(-1);
            table.deleteRow(index);
            alert("Sucessfully deleted");
        }

        if (index3 == 0) {
            document.querySelector("#button").disabled = true;

        } else if (index3 > 1) {
            document.querySelector("#button").disabled = false;
        }
    }
}

function onEditRow(editButtonRef) {
    var selectedRow = editButtonRef.parentElement.parentElement;
    var studentName = selectedRow.cells[1].textContent;
    var rowData = Array.from(selectedRow.cells).map(cell => cell.textContent);

    var editConfirmation = prompt("Edit details of " + studentName + ":"+  "\n" + rowData[1] + "\n" + rowData[2] + "\n" + rowData[3] + "\n" + rowData[4] + "\n" + rowData[5] + "\n" + rowData[6] + "\n" + rowData[7]);

    if (editConfirmation !== null) { 
        if (confirm("Do you want to update " + studentName + "'s data?")) {
            alert(studentName + " data updated successfully");
        }
    }
}