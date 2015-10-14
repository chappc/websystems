// Code by Chris Chappell

// using jquery's $("document").ready() ability to
// prevent javascript from loading before the document
$("document").ready( function()
{
  function makeElement ( tag, className )
  {
    var element = document.createElement(tag);
    element.className = className;
    return element;
  }

  function addClass ( element, className )
  {
    if ( element.className.length > 0 )
    {
      element.className += " " + className;
    }
    else
    {
      element.className = className;
    }
    return element;
  }

  function loadAlbum ()
  {
    function readJSON ( playlist )
    {
      // create container list
      var row_c = makeElement( "UL", "row-container" );
      // create header
      var row_h = makeElement( "LI", "row header" );
      // create generic song
      var gen_col_c = makeElement( "UL", "col-container" );
      var gen_col = makeElement( "LI", "col" );
      gen_col.appendChild( makeElement( "DIV", "container" ) );


      row_c.appendChild(row_h);
      for ( var i = 0; i < playlist.length; ++i )
      {
        song = playlist[i];
        // process each song from the playlist
      }
      // postprocessing add material to the document.
    }

    $.ajax
    ({
      url: "lab4.json",
      dataType: "json",
      cache: false
    })
    .done( readJSON );
  }

  $("#site").click( loadAlbum );

  console.log("JS loaded.");
});