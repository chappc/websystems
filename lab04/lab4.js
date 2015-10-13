// Code by Chris Chappell

// using jquery's $("document").ready() ability to
// prevent javascript from loading before the document
$("document").ready( function()
{
  function loadAlbum ()
  {
    function readJSON ( playlist )
    {
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