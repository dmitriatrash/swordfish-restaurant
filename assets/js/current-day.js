/*
Created by: Dmitri Atrash
Course Name: ICT-4510, Adv Website Design & Mgmt (Summer 2018)
Final Assignment
This script highlights the current day on the about page to let the user see what the
hours of operation are.
 */

$('.list-hours li').eq(new Date().getDay()).addClass('today');