// Display all participants to table

function getParticipants() {

    $.ajax({
        url: './php/getParticipants.php',
        method: 'POST',
        data: {},
        dataType: 'json',
        success: (response) => {
            document.querySelector('#participantsList tbody').innerHTML = ""

            $.each(response, (key, value) => {
                const data = {
                    id: value.id,
                    firstname: value.firstname,
                    lastname: value.lastname,
                    address: value.address,
                    gender: value.gender,
                    agency: value.agency,
                    email: value.email,
                    remarks: value.remarks
                }

                insertDataToTable(data)
            })

        }
    })

}

// Insert data to table
function insertDataToTable(data) {

    let output = `
        <tr>
            <td scope="col">${data.id}</td>
            <td scope="col">${data.firstname}</td>
            <td scope="col">${data.lastname}</td>
            <td scope="col">${data.address}</td>
            <td scope="col">${data.gender}</td>
            <td scope="col">${data.agency}</td>
            <td scope="col">${data.email}</td>
            <td scope="col">${data.remarks}</td>
            <td scope="col">
                <input type="hidden" id="${data.id}">
                <button type="button" class="btn btn-info" onclick="editParticipant(${data.id})">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteParticipant(${data.id})">Delete</button>
            </td>
        </tr>
    `

    let participantsList = $('#participantsList tbody')
    participantsList.append(output)

}


function updateParticipant(data) {
    $.ajax({
        url: './php/updateParticipant.php',
        method: 'POST',
        data: {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            gender: data.gender,
            agency: data.agency,
            email: data.email,
            remarks: data.remarks
        },
        dataType: 'json',
        success: () => {
            getParticipants()
        }
    })
}




function deleteParticipant(id) {

    let response = confirm('Do you want to delete this participant?');

    if (response) {
        $.ajax({
            url: './php/deleteParticipant.php',
            method: 'POST',
            data: { id: id },
            dataType: 'json',
            success: () => {
                getParticipants()
            }
        })
    }

}

function formClear() {
    $('#id').val('')
    $('#firstname').val('')
    $('#lastname').val('')
    $('#address').val('')
    $('#gender').val('')
    $('#agency').val('')
    $('#email').val('')
    $('#remarks').val('')
    $('#addModalFormLabel').html('Add New Participant')
    btnSave.innerHTML = 'Save'
    // $('#firstname').focus()
}


function editParticipant(id) {

    $.ajax({
        url: './php/getParticipant.php',
        method: 'GET',
        data: { id: id },
        dataType: 'json',
        success: (response) => {
        
            $('#addModalForm').modal('show')
            $('#addModalFormLabel').html('Edit Participant')
            btnSave.innerHTML = 'Update'

            $.each(response, (key, value) => {
                $('#id').val(value.id)
                $('#firstname').val(value.firstname)
                $('#lastname').val(value.lastname)
                $('#address').val(value.address)
                $('#gender').val(value.gender)
                $('#agency').val(value.agency)
                $('#email').val(value.email)
                $('#remarks').val(value.remarks)
            })

        }
    })


}


// Load page
window.addEventListener('load', () => {
    getParticipants();
})


function addParticipant(data) {

    $.ajax({
        url: './php/addParticipant.php',
        method: 'POST',
        data: data,
        dataType: 'json',
        success: (response) => {
            if (response) {
                data.id = response
                insertDataToTable(data);
            }
        }
    })

}


const btnSave = document.querySelector('#btnSave');
btnSave.addEventListener('click', (e) => {
    e.preventDefault();

    let id = $('#id').val()
    let firstname = $('#firstname').val()
    let lastname = $('#lastname').val()
    let address = $('#address').val()
    let gender = $('#gender').val()
    let agency = $('#agency').val()
    let email = $('#email').val()
    let remarks = $('#remarks').val()

    let data = { id, firstname, lastname, address, gender, agency, email, remarks }

    if (btnSave.innerHTML === 'Save') {
        addParticipant(data)
    } else {
        updateParticipant(data)
    }

    $('#addModalForm').modal('hide');
})


function searchParticipant() {

    let keyword = document.querySelector('#keyword').value

    $.ajax({
        url: './php/getParticipants.php',
        method: 'GET',
        data: { keyword: keyword },
        dataType: 'json',
        success: (response) => {
            document.querySelector('#participantsList tbody').innerHTML = ""

            $.each(response, (key, value) => {
                const data = {
                    id: value.id,
                    firstname: value.firstname,
                    lastname: value.lastname,
                    address: value.address,
                    gender: value.gender,
                    agency: value.agency,
                    email: value.email,
                    remarks: value.remarks
                }

                insertDataToTable(data)
            })

        }
    })

}