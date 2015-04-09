//    // Set a callback to run when the Google Visualization API is loaded.
//    google.setOnLoadCallback(drawChart);

$(document).ready(function() {
    $("#pizza").addClass("active");
    $("#generate_chart").click(function () {
        //to scroll to a section
        //$.scrollTo('#dashboard');
        $("#pizza").removeClass("active");
        $("#dashboard").addClass("active");
        $("#pizza_section").hide();
        drawChart();
        drawChart1();
        //drawChart2();

    });
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
        /* declare an checkbox array */
        var chkArray = [];
        /* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
        $(".vegToppings:checked").each(function () {
            chkArray.push($(this).val());
        });
        var n = chkArray.length;

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Toppings');
        data.addColumn('number', 'No of');
        for (var i = 0; i < n; i++) {
            data.addRows([ [chkArray[i], i + 1]
            ]);
        }
        // Set chart options
        var options = {'title': 'Veg Pizza Toppings',
            'pieSliceText': 'label',
            'backgroundColor': { fill:'transparent' }
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
        chart.draw(data, options);
    }

    function drawChart1() {
        /* declare an checkbox array */
        var chkArray2 = [];
        /* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
        $(".nvegToppings:checkbox:checked").each(function () {
            chkArray2.push($(this).val());
        });
        var ln = chkArray2.length;

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Toppings');
        data.addColumn('number', 'No of');
        for (var i = 0; i < ln; i++) {
            data.addRows([ [chkArray2[i], i + 2]
            ]);
        }
        // Set chart options
        var options = {'title': 'Non - Veg Pizza Toppings',
            'pieHole' : .4,
            'pieSliceText': 'label',
            'backgroundColor': { fill:'transparent' }
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart.draw(data, options);
    }

//    function drawChart2() {
//
//        var chkArray = [];
//        $(".vegToppings:checked").each(function () {
//            chkArray.push($(this).val());
//        });
//        var n = chkArray.length;
//        var data1 = new google.visualization.DataTable();
//        data1.addColumn('string', 'Toppings');
//        data1.addColumn('number', 'No of');
//        for (var i = 0; i < n; i++) {
//            data1.addRows([ [chkArray[i], i + 1]
//            ]);
//        }
//
//        var chkArray2 = [];
//        $(".nvegToppings:checkbox:checked").each(function () {
//            chkArray2.push($(this).val());
//        });
//        var ln = chkArray2.length;
//        var data2 = new google.visualization.DataTable();
//        data2.addColumn('string', 'Toppings');
//        data2.addColumn('number', 'No of');
//        for (var j = 0; j < ln; j++) {
//            data2.addRows([ [chkArray2[j], j + 2]
//            ]);
//        }
//        // Set chart options
//        var options = {'title': 'Comparison',
//            'pieHole' : .4,
//            'pieSliceText': 'label',
//            'backgroundColor': { fill:'transparent' }
//        };
//        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
//        var diffData = chart.computeDiff(data1, data2);
//        chart.draw(diffData, options);
//    }

});
