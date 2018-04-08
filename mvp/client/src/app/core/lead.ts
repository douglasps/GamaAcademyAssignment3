export class Lead{

    _fullName:string;
    _email:string;
    _datetime:Date;
    _phone:string;
    _password:string;

    constructor(fullName:string, email:string, datetime:Date, phone:string, password:string){
        this._fullName = fullName;
        this._email = email;
        this._datetime = datetime;
        this._phone = phone;
        this._password = password;
        Object.freeze(this);
    }

    get fullName(){
        return this._fullName;
    }

    get email(){
        return this._email;
    }

    get datetime(){
        return new Date(this._datetime);
    }

    get phone(){
        return this._phone;
    }

    get password(){
        return this._password;
    }
}