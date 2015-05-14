<!doctype html>
<html lang="en">
<head>
    <title>Dependency Injection Demo</title>
</head>
<body>
    <cfscript>
        wirebox = new wirebox.system.ioc.Injector();
        wirebox.scanLocations = [ 'com' ];
        dump( wirebox.scanLocations );

        car = wirebox.getInstance('Car');
        dump( car );
    </cfscript>
</body>
</html>
