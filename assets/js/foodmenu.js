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

//Display table
function displayMenu() {
    let data = JSON.parse(window.localStorage.getItem('menuData')); //Retrieve Data
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].Name + "</td>");
        tr.append("<td>" + data[i].Price + "</td>");
        tr.append("<td>" + data[i].Category + "</td>");
        tr.append("<td>" + data[i].Description + "</td>");
        $('#foodMenu').append(tr);
    }
}

//Retrieve data
getMenuData();

//Display chart when button is clicked
displayMenu(this);

