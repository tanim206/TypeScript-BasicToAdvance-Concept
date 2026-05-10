"use strict";
// enum type
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
const canEditThisWebsite = (role) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else
        return false;
};
const result = canEditThisWebsite(UserRole.Admin);
console.log(result);
//# sourceMappingURL=enumType.js.map