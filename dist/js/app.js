const addUserPopup = new Popups('user-image')

const editUserImageBtn = document.querySelector('.edit-user-image')
editUserImageBtn?.addEventListener('click', function(e) {
    e.preventDefault()
    addUserPopup.show()
})
