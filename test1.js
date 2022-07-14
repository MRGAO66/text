let people = {
    name: "张三",
    age: 18
}
//深拷贝
let newPeople = JSON.parse(JSON.stringify(people));