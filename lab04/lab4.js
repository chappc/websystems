// Code by Chris Chappell

// using jquery's $("document").ready() ability to
// prevent javascript from loading before the document
$("document").ready( function()
{

  function loadAlbum ()
  {
    function makeElement ( tag, className )
    {
      var element = document.createElement(tag);
      element.className = className;
      return element;
    }

    function makeColumn ( className, inner )
    {
      var col = makeElement( "LI", "col " + className );
      var container = makeElement( "DIV", "container" );
      container.innerHTML = inner;
      col.appendChild( container );
      return col;
    }

    function makeRow ( innerContent )
    {
      // create generic column container
      var col_c = makeElement( "UL", "col-container" );
      // create columns for song
      col_c.appendChild(makeColumn( "song", innerContent[0] ));
      col_c.appendChild(makeColumn( "artist", innerContent[1] ));
      col_c.appendChild(makeColumn( "album", innerContent[2] ));
      col_c.appendChild(makeColumn( "cover", innerContent[3] ));
      col_c.appendChild(makeColumn( "release", innerContent[4] ));
      col_c.appendChild(makeColumn( "genre", innerContent[5] ));
      col_c.appendChild(makeColumn( "website", innerContent[6] ));
      return col_c;
    }

    function parseContent ( song )
    {
      var output_song = [
        "<p>" + song.title + "</p>",
        "<p>" + song.artist + "</p>", // artist
        "<p>" + song.album + "</p>", // album
        "<img src=\"" + song.cover + "\" class=\"cover-img\" />", // cover
        "<p>" + song.release +"</p>", // release
        "<p>" + song.genre.join(", ") + "</p>", // genres
        "<a href=\"" + song.website + "\">" + song.website/*.match("/:\/\/(*)\//")[0]*/ + "</a>",
                     // website
      ];
      return output_song;
    }

    function readJSON ( playlist )
    {
      console.log(playlist);

      // create container list
      var row_c = makeElement( "UL", "row-container" );
      // create header
      var row_h = makeElement( "LI", "row header" );
      // populate header
      row_h.appendChild(makeRow
      ([
        "<h1>Song</h1>",
        "<h1>Artist</h1>",
        "<h1>Album</h1>",
        "<h1>Cover</h1>",
        "<h1>Release</h1>",
        "<h1>Genre</h1>",
        "<h1>Website</h1>"
      ]));

      row_c.appendChild(row_h);
      for ( var i = 0; i < playlist.length; ++i )
      {
        var row = makeElement( "LI", "row" );
        // process each song from the playlist
        row.appendChild(makeRow(parseContent(playlist[i])));
        row_c.appendChild(row);
      }
      // postprocessing add material to the document.
      document.body.innerHTML = "";
      document.body.appendChild(row_c);
    }

    $.get( "lab4.json", readJSON );
  }

  $("#site").click( loadAlbum );

  console.log("JS loaded.");
});