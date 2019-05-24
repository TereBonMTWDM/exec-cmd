var exec = require('child_process').exec;
var fs = require('fs');

console.log("estoy en app");
/*//======Enero 2019===//
var command = "C://DTS//dtexec.exe /f Package1.dtsx";
*/


//======Marzo 2019: 10.42 --> 2.24 ===//
//var serverNode = 
var file = "Egresados.dtsx";
var dir = "cd var/www/nodejs1/ExecCmd/";
var cmdLinux = dir + " && pwd";
//var command  = "dtexec.exe /f && " + cmdLinux;
//var command = "dtexec.exe /f " + "&& pwd/" + file;
//var command = "pwd" + "@dtexec.exe /f " + "&& " + dir + file;
//var command = "pwd && ls && DTExec.exe /f && pwd /Egresados.dtsx";
var cmdLinux = "pwd && ls";
//var command = "cd /var/www/nodejs1/ExecCmd/ && DTExec.exe /f /var/www/nodejs1/ExecCmd/Egresados.dtsx";
var command = "cd /var/www/nodejs1/ExecCmd/ && DTExec.exe /f /var/www/nodejs1/ExecCmd/Egresados.dtsx";

//console.log("command" , command);


child = exec(command,
    function (error, stdout, stderr){
        if(error !== null){
            console.log('exec error: ', error);
        }
        else{
            console.log('//===================== perfecto:', stdout);
        }
    }
);


/*//======Noviembre 2018===//
//var command = "dtexec.exe /f C:/Users/Tere Bon-Ice/Documents/Visual Studio 2017/Projects/SIIES_BI/ImportXls_IS/SIIES_IS/SIIES_IS/CalifExtras.dtsx";
//var command = "@cd C:\\'Program Files'\\'Microsoft SQL Server'\\120\\DTS\\Binn pwd";

//var command = "cd c://Program Files//Microsoft SQL Server && dir";
var commandBind = "cd C://Program Files//Microsoft SQL Server//120//DTS//Binn";
var commandDts = "dtexec.exe /f C://Users//Tere Bon-Ice//Documents//Visual Studio 2017//Projects//SIIES_BI//ImportXls_IS//SIIES_IS//SIIES_IS//CalifExtras.dtsx";
var cmd = "cd C://Users//Tere Bon-Ice//Documents//Visual Studio 2017//Projects//SIIES_BI//ImportXls_IS//SIIES_IS//SIIES_IS"



//var command = "cd C://Program Files//Microsoft SQL Server//120//DTS//Binn && dtexec.exe /f C://Users//Tere Bon-Ice//Documents//Visual Studio 2017//Projects//SIIES_BI//ImportXls_IS//SIIES_IS//SIIES_IS//CalifExtras.dtsx";
//var command = cmd + " && dir";
var command = "P://dtexec.exe /f Matricula.dtsx";


child = exec(command,
    function (error, stdout, stderr){
        if(error !== null){
            console.log('exec error: ', error);
        }
        else{
            console.log('perfecto:', stdout);
        }
    });
    */