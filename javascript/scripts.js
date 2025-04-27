// document.getElementById("p1").innerText = "New display string"; // To change the display string

// const theiranswer = document.getElementById("answer");

// theiranswer.onsubmit = function()
// {
//     alert(12345);
// }

function lmao()
{
    alert("LMAO");
}

function pickupinput(event)
{
    var x = document.getElementById("answer").value;
    if (x.length == 0)
    {
        event.preventDefault();
        return;
    }
    // alert("You typed: " + x);
    document.getElementById("answer").value = ""; // Clear the input field
    // input node
    addinputevent(x);
    // response node
    addresponseevent(x);
    event.preventDefault();
}

function addinputevent(x)
{
    const element = document.getElementById("conversation");
    const para = document.createElement("p"); // Create a new paragraph element
    const node = document.createTextNode(x); // Create a text node with the input value
    para.classList.add("userInput"); // Set the class name for styling
    para.appendChild(node); // Append the text node to the paragraph element
    element.appendChild(para); // Append the paragraph element to the "conversation" element
}

function addresponseevent(x)
{
    const element = document.getElementById("conversation");
    const respara = document.createElement("p"); // Create a new paragraph element
    const resnode = document.createTextNode("You typed: " + x); // Create a text node with the input value
    respara.classList.add("ourResponse"); // Set the class name for styling
    respara.appendChild(resnode); // Append the text node to the paragraph element
    element.appendChild(respara); // Append the paragraph element to the "conversation" element
}

function checkvalidity(event)
{
    document.getElementById("answer").value = document.getElementById("answer").value.toUpperCase(); // To change the display string
    var x = document.getElementById("answer").value;
    if (x.length >= 10)
    {
        document.getElementById("answer").value = x.substring(0, 10); // Limit input to 10 characters
        console.log("Input limited to 256 characters.");
    }
    event.preventDefault();
}

// function reactoninput(input)
// {

// }