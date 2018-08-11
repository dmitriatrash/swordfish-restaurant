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

//Display chart when button is clicked
$(document).ready(function() {
    $('#displayButton').click(function () {
        let data = JSON.parse(window.localStorage.getItem('menuData')); //Retrieve Data
            document.getElementById('foodMenu').innerHTML += data;
        });
    });






