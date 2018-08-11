/*
Created by: Dmitri Atrash
Course Name: ICT-4510, Adv Website Design & Mgmt (Summer 2018)
Assignment 8
This script retrieves JSON data using a jQuery Ajax GET request, stores it in the browser's localStorage, and
retrieves it to display a pie chart using ChartJS.
 */

//Function to get data and place it in localStorage
function getMenuData () {
    let url = 'assets/menu.json';
    $.get(url, function (data) {
        window.localStorage.setItem('menuData', JSON.stringify(data));
    });
}

//Retrieve data
getMenuData();
let data = JSON.parse(window.localStorage.getItem('menuData'));
//Display chart when button is clicked
$(document).ready(function() {
    $('#displayButton').click(function () {
 //Retrieve Data
        $('#foodMenu').createTable(data, {
            // General Style for Table
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#DDDDDD',
            fontFamily: 'Verdana, Helvetica, Arial, FreeSans, sans-serif',

            // Table Header Style
            thBg: '#F3F3F3',
            thColor: '#0E0E0E',
            thHeight: '30px',
            thFontFamily: '"Open Sans Condensed", sans-serif',
            thFontSize: '14px',
            thTextTransform: 'capitalize',

            // Table Body/Row Style
            trBg: '#fff',
            trColor: '#0E0E0E',
            trHeight: '25px',
            trFontFamily: '"Open Sans", sans-serif',
            trFontSize: '13px',

            // Table Body's Column Style
            tdPaddingLeft: '10px',
            tdPaddingRight: '10px'
        });
        $('#foodMenu').createTable(data, {});
    });

});






