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

const signupFormHandler = async function (event) {
    event.preventDefault();

    const nameEl = document.querySelector('#name-signup');
    const passwordEl = document.querySelector('#password-signup');
    const emailEl = document.querySelector('#email-signup');

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            name: nameEl.value,
            password: passwordEl.value,
            email: emailEl.nodeValue,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        errorModal(response);
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
