import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
export class BaseDal<T>{

    _reference;
    _typeofModel;
    _fields;

    constructor(strReference, typeofModel, ...fields){
		var config = {
            apiKey: "AIzaSyCHQ0WOTYQWjZqHqp47yQt9Vc1Qh_bXdaY",
            authDomain: "hustler-s-league.firebaseapp.com",
            databaseURL: "https://hustler-s-league.firebaseio.com",
            projectId: "hustler-s-league",
            storageBucket: "hustler-s-league.appspot.com",
            messagingSenderId: "725127233905"
        };
        if (!firebase.apps.length)
            firebase.initializeApp(config);

        this._reference = firebase.database().ref(strReference);
        this._typeofModel = typeofModel;
        this._fields = fields;
    }

    save<T>(model){
        let obj = {};
        this._fields.forEach(prop => obj[prop] = JSON.stringify(model[prop]), this); 
        return this._reference.push(obj).key;
    }

    getAll() : Promise<T[]>{
        return new Promise<T[]>(resolve =>{
            this._reference.once("value", data => resolve(this._convertData(data)));
        });
    }

    _factoryObjects(class_, args){
        return new class_(...args);
    }

    _convertData(data) : T[]{
        if(!data || !data.val()) return;

        let models = data.val();
        let keys = Object.keys(models);
        let list = [];
        keys.forEach(key => {
            let item = models[key];
            let args = this._fields.map(f => JSON.parse(item[f]));
            list.push(this._factoryObjects(this._typeofModel, args));
        }, this);

        return list;
    }

}