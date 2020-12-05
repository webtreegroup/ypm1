import { Popups } from "./components/Popup/Popup.js";
// popups
const editUserImagePopup = new Popups('edit-user-image');
const addUserPopup = new Popups('add-user');
const removeUserPopup = new Popups('remove-user');
const editUserImageBtn = document.querySelector('.edit-user-image');
editUserImageBtn === null || editUserImageBtn === void 0 ? void 0 : editUserImageBtn.addEventListener('click', function (e) {
    e.preventDefault();
    editUserImagePopup.show();
});
const addUserBtn = document.querySelector('.add-user');
addUserBtn === null || addUserBtn === void 0 ? void 0 : addUserBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addUserPopup.show();
});
const removeUserBtn = document.querySelector('.remove-user');
removeUserBtn === null || removeUserBtn === void 0 ? void 0 : removeUserBtn.addEventListener('click', function (e) {
    e.preventDefault();
    removeUserPopup.show();
});
// forms
const forms = document.querySelectorAll('.ajax-form');
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const requestForConsole = {};
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            requestForConsole[key] = value;
        }
        console.log(requestForConsole);
    });
});
//# sourceMappingURL=app.js.map