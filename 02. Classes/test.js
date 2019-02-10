/* class declaration */
class Person{
    constructor(name, year_born){
        this.name = name;
        this.year_born = year_born;
    };
    get age(){
        return this.calcAge();
    }

    calcAge(){
        return new Date().getFullYear() - this.year_born;
    }

    what(){
        console.log(this.name + ' is a Programmer');
    }

    static arms(){
        return 2;
    }
}

var me = new Person("Mahade", 1988);
console.log(me.name + " was born in " + me.year_born);
me.what();
console.log(me.name + " has " + Person.arms() + "arms!");

// child class //
class Human extends Person{
    what(){
        //super.what();
        console.log(this.name + " is a Job holder");
    }
}
var you = new Human ("Hasan", 1990);
me.what();
you.what();
