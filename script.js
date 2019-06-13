$(document).ready(function() {
                  $.ajax({
                    url: "http://igovphil.github.io/java-exam-01/uacs-agency.json",
                    dataType: "json",
                    success: function(data){
                      $(data).each(function(index,value) {

                        var record="<tr><td>" + value.uacs + "</td> <td>" + value.agency + "</td> <td>" + value.department + "</td> </tr>";
                  
                        $("table").append(record);
                      });
                    }
                  }); //ajax

                //   $("#search").keyup(function(){
                //     search_table($(this).val());
                //   });

                //   function search_table(value){

                //     $('#uacs_table tr').each(function(){
                //       var found = 'false';

                //       $(this).each(function(){
                //           if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
                //           {
                //             found ='true';
                //           }
                //       });


                //       if(found == 'true')
                //       {

                //         $(this).show();
                //       }
                //       else
                //       {
                //         $(this).hide();
                //       }
                    
                //     });
                //   }
});