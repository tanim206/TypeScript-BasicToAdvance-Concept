// enum type

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEditThisWebsite = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};
const result = canEditThisWebsite(UserRole.Admin);
console.log(result);
