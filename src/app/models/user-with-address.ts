import { User } from "./user";

/**
 * Inheritance is shown here
 * UserWithAddress is a child class of User
 */
export class UserWithAddress extends User {
    private _address: string;

    /**
     * Polymorphism - this method can be accessed in two ways
     * user.setAddress('Some address')
     * or,
     * user.setAddress('Some address', 'pincode')
     * Polymorphism - same method name is getting used in two differnt ways
     */
    public setAddress(address: string, pincode?: string) {
        this._address = address
    }

    public getAddress(): string {
        return this._address;
    }
}