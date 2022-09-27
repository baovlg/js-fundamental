var hoistingFunction = require("./function");
hoistingFunction;

{
    /**
     * class hoisting
     * Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class.
     * However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.
     */
}

{
    /**
     * Function and class expression hoisting
     * Function expressions and class expressions are not hoisted.
     */
}