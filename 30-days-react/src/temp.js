class Student {
    constructor (_name, _age) {
        this.age = _age;
        this.name = _name;
    }

    get summary () {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

export default Student;