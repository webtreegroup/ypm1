"use strict";
const controls = document.querySelectorAll('.input-control input');
function handleControlChangeOrFocus(e) {
    var _a;
    const elem = e.target;
    const currentValue = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
    if (currentValue) {
        elem.classList.add('touched');
    }
    else {
        elem.classList.remove('touched');
    }
}
controls.forEach(element => {
    element.addEventListener('focus', handleControlChangeOrFocus);
    element.addEventListener('input', handleControlChangeOrFocus);
});
//# sourceMappingURL=InputControl.js.map