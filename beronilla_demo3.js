class Student {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    setAge(newAge) {
        this.#age = newAge;
    }
}

const student = new Student("Khenjan", 21);
student.setAge(21);