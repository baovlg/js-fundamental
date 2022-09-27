{
    console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
    var num; // Declaration
    num = 6; // Initialization
    console.log(num); // Returns 6 after the line with initialization is executed.
}

{
    console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
    var num = 6; // Initialization and declaration.
    console.log(num); // Returns 6 after the line with initialization is executed.
}

{
    console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
    num = 6; // Initialization
}

{
    a = "Cran"; // Initialize a
    b = "berry"; // Initialize b
    console.log(`${a}${b}`); // 'Cranberry'
}

{
    /**
     * Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.
     * An exception will be thrown if a variable declared with let or const is read before it is initialized.
     */
    console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
    let num = 6; // Initialization
}
