const errorModal = async function (response) {
    const error = await response.json();
    const errorModal = document.getElementById('errorModalBody');
    errorModal.innerHTML = error.message;
    $('#errorModal').modal('show');

    const closeButton = document.querySelector(
        '#errorModal .modal-footer .btn-secondary',
    );
    closeButton.addEventListener('click', function () {
        $('#errorModal').modal('hide');
    });
};

const newFormHandler = async function (event) {
    event.preventDefault();

    const donomonTypeId = document.getElementById('type').value;

    const response = await fetch('/api/donomons', {
        method: 'POST',
        body: JSON.stringify({
            donomonTypeId,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        errorModal(response);
    }
};

document
    .getElementById('new-character')
    .addEventListener('submit', newFormHandler);

//delete donomon button id deleteDonomon by sending to api/donomons/:id delete route
const deleteFormHandler = async function (event) {
    if (event.target.matches('.deleteDonomon')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/donomons/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            errorModal(response);
        }
    }
};

document
    .getElementsByClassName('character-party')[0]
    .addEventListener('click', deleteFormHandler);
