var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["idong"] = document.getElementById("idong").value;
    formData["descricao"] = document.getElementById("descricao").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listaOngs").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idong;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descricao;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    
}

function resetForm() {
    document.getElementById("idong").value = "";
    document.getElementById("descricao").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idong").value = selectedRow.cells[0].innerHTML;
    document.getElementById("descricao").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idong;
    selectedRow.cells[1].innerHTML = formData.descricao;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaOngs").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("idong").value == "") {
        isValid = false;
        document.getElementById("idongValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idongValidationError").classList.contains("hide"))
            document.getElementById("idongValidationError").classList.add("hide");
    }
    return isValid;
}