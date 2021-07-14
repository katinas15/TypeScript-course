import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

console.log("a");
const user = User.buildUser({ name: "NAME", age: 20 });
console.log(user);
const userForm = new UserForm(document.getElementById("root"), user);

userForm.render();
