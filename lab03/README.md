CSCI2960 Web Systems Development
Lab 3
Chris Chappell

Part 1.

To iterate through the DOM of an html file, one must visit all the nodes in said file.  This can be done recursively by visiting a node within a function, and then visiting each children by calling said function on each child node.  This also allows callback functions to be placed custom to each node, since Javascript has lambda calculus builtin.  To express the depth of a node, a depth counter was created in such a way it would be visible from the recursing function.  This is to reduce stack sizes and also because it is easier than passing the depth counter as a parameter.  The string.repeat() function comes in handy here, so one doesn't have to write an "Intro to CS" style for loop to print out multiple dashes.

Part 2.

Using the same method from part 1 to iterate through the DOM, we now create event handlers for mouse clicks that respond by throwing alerts telling you what the tag of the element you clicked on was.  This includes every element containing said element, since you are technically clicking on those too. Since the innermost element gets registered before containing elements, the alerts percolate upwards and outwards through the dom until they reach the <html> tag.

Part 3.

I know there is a way in JQuery to wait until the document has loaded to run code.  Other than putting the <script> tag all the way at the end of the <body>, I wasn't sure whether I needed to do anything else.  This does work, so I think it's okay.  We copy the .quote of our choice and append it to <body>, then run a final iteration through the DOM looking for <div>s and adding a couple handlers to make them respond to the mouse entering the <div>.  This again is done using the same function from part 1.

