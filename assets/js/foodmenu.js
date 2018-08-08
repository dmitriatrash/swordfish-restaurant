/*
Created by: Dmitri Atrash
Course Name: ICT-4510, Adv Website Design & Mgmt (Summer 2018)
Final Project
This script retrieves JSON data using a jQuery Ajax GET request, stores it in the browser's localStorage, and
retrieves it to display a pie chart using ChartJS.
 */

//Function to get data and place it in localStorage
function getMenuData () {
	let url = 'assets/chartdata/piechart-data.json';
	$.get(url, function (data) {
		window.localStorage.setItem('menuData', JSON.stringify(data));
	});
}

//Display Menu Data
function displayMenuData() {

	let data = JSON.parse(window.localStorage.getItem('pieChartData')); //Turn data into JS object
	let ctx = document.getElementById("myPieChart").getContext("2d");
	let myPieChart = new Chart(ctx).Pie(data, options);
}

//Retrieve data
getPieChartData();

//Display chart when button is clicked
$(document).ready(function() {
    $('#displayButton').click(function() {
        displayPieChart();
    });
});