//function searchFunc() {
  // Declare variables
//  var input, filter, table, tr, td, i, txtValue;
//  input = document.getElementById("myInput");
//  filter = input.value.toUpperCase();
//  table = document.getElementById("myTable");
//  tr = table.getElementsByTagName("tr");
  // trp = table.getElementsByTagPhone("tr");

  // Loop through all table rows, and hide those who don't match the search query
//  for (i = 0; i < tr.length; i++) {
//    td = tr[i].getElementsByTagName("td")[1];
//    if (td) {
//      txtValue = td.textContent || td.innerText;
//      if (txtValue.toUpperCase().indexOf(filter) > -1) {
//        tr[i].style.display = "";
//      } else {
//        tr[i].style.display = "none";
//      }
//    }
//  }
//  for (i = 0; i < tr.length; i++) {
//    td = trp[i].getElementsByTagPhone("td")[2];
//    if (td) {
//      txtValue = td.textContent || td.innerText;
//      if (txtValue.toUpperCase().indexOf(filter) > -1) {
//        trp[i].style.display = "";
//      } else {
//        trp[i].style.display = "none";
//      }
//    }
//  }
//}

$(document).ready(function () {
    $("#myTable").DataTable({
      columnDefs: [
        {
            targets: [0],
            orderData: [0, 1],
        },
        {
            targets: [1],
            orderData: [1, 0],
        },
        {
            targets: [4],
            orderData: [4, 0],
        },
    ],
    });
  });
