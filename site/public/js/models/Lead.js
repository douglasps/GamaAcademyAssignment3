class Lead{
    constructor(fullName, email, datetime, phone, password){
        this._fullName = fullName;
        this._email = email;
        this._datetime = typeof datetime == "Date" ? datetime : new Date(datetime);
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