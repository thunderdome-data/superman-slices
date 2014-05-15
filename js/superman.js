      var curSlice;
      var widths = [43, 43, 43, 43, 43, 43, 43];
      var positions = [155, 198, 241, 284, 327, 370, 413];
      var names = ["Kirk Alyn - 1948 to 1950", "George Reeves - 1951 to 1958", "Christopher Reeve - 1978 to 1987", "Dean Cain - 1993 to 1997", "Tom Welling - 2001 to 2011", "Brandon Routh - 2006", "Henry Cavill - 2013"];

      $("#close").hide();
      $("#tooltip").hide();

      function onOver(e) {
        var myElement = e.target;
        curSlice = $(e.target).attr("data-id");
        $(e.target).css( {opacity: .75});
        $("#tooltip").show();
        $("#tooltip").text(names[curSlice]);
        //console.log("over");
      };
      
      function onOut(e) {
        var myElement = e.target;
        $(e.target).css( {opacity: 1});
        $("#tooltip").hide();
      };

      
      function onMouseClick(e) {
        //console.log("click");
        for (var j=0; j<7; j++) {
            $("#s" + j).css("z-index", j);
            $("#s" + j).css("opacity", 1);
            $("#s" + i).unbind('mouseover mouseout');
        }

        curSlice = $(e.target).attr("data-id");
        $(e.target).css("z-index", 100);
        $(e.target).animate( { 'width': 600, 'left': 0, 'background-position': 0 }, 250);
        
        $("#close").show();
        $("#close").css("z-index", 102); 

        $("#c" + curSlice).show();
        $("#tooltip").hide();

      };
      
      for (var i=0; i<7; i++) {
        $("#s" + i).hover(onOver, onOut);
        $("#s" + i).on('click', onMouseClick);
        $("#s" + i).mousemove(function(e) {
            $('#tooltip').css({'top':e.pageY ,'left':e.pageX + 10})
        });
      }

      $("#close").click( function() {
        $("#s" + curSlice).animate( { width: widths[curSlice], left: positions[curSlice], 'background-position': -positions[curSlice] }, 500);
        
        $("#close").hide();

        for (var k=0; k<7; k++) {
          $("#c" + k).hide();
        }
      });