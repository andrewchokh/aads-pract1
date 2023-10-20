console.log("Stack script has been connected.");

let stack_array = [];
const stack_length = 12;

function getPushValue() {
    return document.getElementById("pushValue").value;
}

function updateStack() {
    document.getElementById("displayStack").textContent = stack_array.toString();
    console.log(stack_array);
}

// Stack functions
function _push() {
    if (stack_array.length  <= stack_length) {
        stack_array.push(getPushValue());

        updateStack();
    }
    else
    {
        alert("The stack is full.");
    }
}

function _pop() {
    if (stack_array.length > 0) {
        stack_array.pop();

        updateStack();
    }
    else
    {
        alert("The stack is empty");
    }
}

function _back() {
    if (stack_array.length > 0) {
        alert("The last stack's element is " + stack_array[stack_array.length - 1] + ".");

        updateStack();
    }
    else
    {
        alert("The stack is empty");
    }
}

function _size() {
    alert("There are " + stack_array.length + " element(s) in the stack.");
}

function _clear() {
    stack_array = [];

    updateStack();

    alert("The stack is cleared.");
}

function _exit() {
    alert("Bye, user!");

    window.close();
}