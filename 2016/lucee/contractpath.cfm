<cfscript>
    writeOutput( expandPath('path-placeholder.cfm') & chr(10) );
    writeOutput( contractPath( expandPath('path-placeholder.cfm') ) & chr(10) );
    writeOutput( contractPath( expandPath('path-placeholder.cfm'), true ) & chr(10) );
    writeOutput( contractPath( expandPath('../hugo') ) & chr(10) );
    writeOutput( contractPath( expandPath('../hugo'), true ) & chr(10) );
    writeOutput( contractPath( expandPath('../../') ) & chr(10) );
    writeOutput( contractPath( expandPath('../../'), true ) & chr(10) );
</cfscript>
