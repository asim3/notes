js_files.main = true
/*
      var toDB = {
        data : [] ,
        move : function(x, i) {
          if (typeof Item == 'undefined') { add_to_info("<h4 style='color:red;'>Item undefined</h4>"); console.log("Item undefined"); }
          else {
            DATABASE.push( Item(x) )
            last_updated_item = Date.now()
            if(document.getElementById(x.father)) {
              new_app_box(DATABASE[i])
            }
          }
        }
      };

      var update_database = function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Response = JSON.parse(xhttp.responseText);
            if(typeof DATABASE !== 'undefined') {
              Response.map( toDB.move );
              console.log('DATABASE has updated ' + last_updated_item);
            }
            else {
              toDB.data = Response;
              add_to_info("<h4>DATABASE is undefined, will copy to TEMP</h4>");
              console.log("DATABASE is undefined, will copy to TEMP");
            };
          };
        };
        xhttp.open("GET", document.location.origin + "/content/" + last_updated_item, true);
        xhttp.send();
      }();
*/
