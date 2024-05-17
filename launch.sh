@echo off
echo - Stating XAMPP...

cd /d D:\XAMPP

echo - Starting apache...
call apache_start.bat

echo - Starting sql
call mysql_start.bat

timeout /t 5

echo - Executing Node API
cd .\API\
node server.js

echo - Executing Angular webApp
cd .\chiro-website\
ng serve --open

echo - All Command executed
cmd /k
