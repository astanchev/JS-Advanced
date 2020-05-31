const Extensible = (function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            Object
                .entries(template)
                .forEach(([key, value]) => {
                    //if the template is function
                    if (typeof (value) === 'function') {
                        //we attach function to the prototype of the instance
                        Object.getPrototypeOf(this)[key] = value;
                    } else {
                        //if it is property, we attach it to the class
                        this[key] = value;
                    }
                });
        }
    };
}());

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
obj1.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
  }  );