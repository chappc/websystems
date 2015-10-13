// Code by Chris Chappell
// Web Systems Development Lab 3
// 

/*
 * function iterates over each element in the DOM
 * calling func() with the element as the first 
 * parameter and the depth of the node as second.
 */
function iterateDOM ( func )
{
  // set depth counter
  var iteration = 0;
  // definition of recursive portion
  function recurseDOM ( element )
  {
//     console.log(func);
    func(element, iteration);
    // increment depth counter
    ++iteration;
    // recurse on each child of the element
    for ( var i = 0; i < element.children.length; ++i )
      recurseDOM(element.children[i]);
    // done recursing, decrement depth counter
    --iteration;
  }
  // function defined, now call it on the <html> element
  recurseDOM(document.documentElement);
}

// Part 1

/*
 * Function makes a string out of all the element
 * tags in the DOM and their depths represented
 * by dashes, and returns the string.
 */
function getElementTags ()
{
  // create string
  var text = "";
  
  /*
   * Function takes the element and depth and adds
   * a new line of representation to the string.
   * This works because Javascript is statically scoped.
   */
  function parseTag ( element, depth )
  {
    text += "-".repeat(depth) + element.tagName + "\n";
  }

  // Call the function on each element in the DOM
  iterateDOM(parseTag);
  
  return text;
}

// get return value from getElementTags() and put it in #info
document.getElementById("info").innerHTML = getElementTags();

// Part 2
/*
 * Function creates an alert for an element that displays
 * the element's tag name.
 */
function bubbleAlert (element)
{
  element.addEventListener( "click", function() {
    alert(element.tagName);
  });
}

// Call function for every element in the DOM
iterateDOM(bubbleAlert);


// Part 3

// Copy favourite quote and append its clone.
fav = document.getElementsByClassName("quote")[3]
document.body.appendChild(fav.cloneNode(true));

/* 
 * function takes div tags and add an event handler
 * to move them over 10 pixels and turn their background
 * color gray whenever they are moused over.
 */
function moveOnMousover ( element )
{
  if ( element.tagName == "DIV" )
  {
    // store old data
    left = element.style.marginLeft;
    back = element.style.backgroundColor;
    // forward process
    var offset = parseInt(element.offsetLeft) + 10;
    element.addEventListener( "mouseover", function() {
      element.style.marginLeft = offset + "px";
      element.style.backgroundColor = "#ddd";
    });
    // backward process
    element.addEventListener( "mouseout", function() {
      element.style.marginLeft = left;
      element.style.backgroundColor = back;
    });
  }
}

// Call function for all elements in DOM
iterateDOM(moveOnMousover);

// Test to make sure Javascript is working
console.log("JS loaded.");
