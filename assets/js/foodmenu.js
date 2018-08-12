/*
Created by: Dmitri Atrash
Course Name: ICT-4510, Adv Website Design & Mgmt (Summer 2018)
Final Assignment
This script retrieves JSON data using a jQuery Ajax GET request, stores it in the browser's localStorage, and
retrieves it to display a table showcasing the menu.
 */

//Function to get data and place it in localStorage
function getMenuData () {
    let url = 'http://localhost/scripts/menu.json';
    $.get(url, function (data) {
        window.localStorage.setItem('menuData', JSON.stringify(data));
    });
}

//Retrieve data
getMenuData();

//Display menu when button is clicked
$(document).ready(function() {
    $('#displayButton').click(function () {
        var defaultData = JSON.parse(window.localStorage.getItem('menuData'));

        var dom = {
            $data: $('#data'),
            $table: $('#table'),
        };

        function json2table(json, $table) {
            var cols = Object.keys(json[0]);

            var headerRow = '';
            var bodyRows = '';

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            $table.html('<thead><tr></tr></thead><tbody></tbody>');

            cols.map(function(col) {
                headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
            });

            json.map(function(row) {
                bodyRows += '<tr>';

                cols.map(function(colName) {
                    bodyRows += '<td>' + row[colName] + '</td>';
                })

                bodyRows += '</tr>';
            });

            $table.find('thead tr').append(headerRow);
            $table.find('tbody').append(bodyRows);
        }

        dom.$data.val(JSON.stringify(defaultData));
        json2table(defaultData, dom.$table);

        dom.$data.on('input', function() {
            json2table(JSON.parse(dom.$data.val()), dom.$table);
        });

        $('#displayButton').fadeOut(); // Hide button
    });

});






