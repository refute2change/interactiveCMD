// document.getElementById("p1").innerText = "New display string"; // To change the display string

// const theiranswer = document.getElementById("answer");

// theiranswer.onsubmit = function()
// {
//     alert(12345);
// }
const responses = {"responses": {
    "YES": "YESN'T",
    "NO": "NON'T",
    "MAYBE": "MAYBE NOT",
    "OK": "OKAY",
    "SURE": "SURELY",
    "YESNO": "YESNOPE",
    "YEP": "YEPER",
    "NOPE": "NOPEY",
    "YEAH": "YEAH-NOPE",
    "NAH": "NAH-NOPE",
    "YAY": "YAY-NAY",
    "NAY": "NAY-YAY",
    "": "What?"}
};

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
    const conversation = document.getElementById("conversation");
    conversation.scrollTop = conversation.scrollHeight;
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
    const response = document.createElement("div"); // Create a new div element, will be used later on for actual multi-line response
    const respara = document.createElement("p"); // Create a new paragraph element
    let resstring = ""; // Initialize the response string
    if (responses["responses"].hasOwnProperty(x)) {
        resstring = responses["responses"][x]; // Get the response string from the object
        console.log(responses["responses"][x]);
    }
    else
    {
        resstring = responses["responses"][""];
    }
    console.log(resstring);
    const resnode = document.createTextNode(resstring); // Create a text node with the input value
    respara.classList.add("ourResponse"); // Set the class name for styling
    respara.appendChild(resnode); // Append the text node to the paragraph element
    element.appendChild(respara); // Append the paragraph element to the "conversation" element
}

function checkvalidity(event)
{
    document.getElementById("answer").value = document.getElementById("answer").value.toUpperCase(); // To change the display string
    var x = document.getElementById("answer").value;
    if (x.length >= 256)
    {
        document.getElementById("answer").value = x.substring(0, 256); // Limit input to 10 characters
        console.log("Input limited to 256 characters.");
    }
    event.preventDefault();
}

// function reactoninput(input)
// {

// }