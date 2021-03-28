export class User {
    private _name: string;
    private _age: number; // private members are hidden from other classes using it
    protected _id = Math.round(Math.random() * 10000) + 1; // generates a unique id for user
    // protected members are accesible to child

    public setName(newName: string) { // this provides a way to set username
        this._name = newName;
    }

    public getName(): string { // outside classes can access user name via this
        return this._name;
    }

    public setAge(newAge: number) {
        this._age = newAge;
    }

    public getAge(): number {
        return this._age;
    }

    public getId(): number { // this will be used to manipulate or delete user
        return this._id;
    }
}