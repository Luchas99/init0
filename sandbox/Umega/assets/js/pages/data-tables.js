$(document).ready(function() {
    $('#example-1').dataTable();

    var table = $('#example-2').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'print']
    });

    table.buttons().container()
        .appendTo('#example-2_wrapper .col-sm-6:eq(0)');

    $('#example-3').DataTable({
        colReorder: true
    });

    $('#example-5').DataTable({
        keys: true
    });

    $('#example-6').DataTable({
        select: {
            style: 'os'
        }
    });

    $('#example-7').DataTable();

    var table = $('#example-8').DataTable({
        scrollX: true,
        scrollCollapse: true,
        fixedColumns: true
    });

    var table = $('#example-9').DataTable({
        fixedHeader: true
    });
});