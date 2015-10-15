CSCI2960 Web Systems Development
Lab 4 AJAX and JQuery

By Chris Chappell

Part 1.

The JSON format was intended to be as stripped of html meaning as possible so as to provide only semantic meaning to the form.  As such, the playlist is expressed as a list of songs, each containing identifiers for different information types.  Also, the genre is a list of items, instead of a single item.  Everything else is kept as a plain string.  If given enough time, a date object would have been used to express the release date of the song, but that was not allowed in the time given.

Part 2

There is some confusion as to how one populates the given html when one is told to use their own html structure from lab 2.  Instead of changing attributes for the "No Album" image, a new album structure was created to replace the image.  Also, the css file from lab 2 did not affect the html given, so it was left as is.  However, everything else was provided as needed upon json being received.