import { User } from "./models/User"

const user = new User({ name: "myname", age: 20 })

console.log(user.get("name"))

user.set({ name: "newname", age: 999 })

console.log(user.get("name"))

user.on("change", () => {
    console.log("change 1")
})

user.on("change", () => {
    console.log("change 2")
})

user.on("save", () => {
    console.log("save")
})

user.trigger("change")
