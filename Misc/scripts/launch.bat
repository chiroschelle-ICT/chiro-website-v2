@echo off

REM --- XAMPP ---
REM Change directory to campp installation directory
    cd D:\XAMPP
REM Start Apache and Mysql
    apache_start.bat
    mysql_start.bat
REM Keep the command prompt window open so you can see any errors
    pause

REM -- Website -- 
