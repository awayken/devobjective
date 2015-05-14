var db = new PouchDB('my_database');

var showDocs = function() {
    db.allDocs({
        include_docs: true,
        descending: true
    }, function( err, doc ) {
        if (!err) {
            console.log( doc.rows );
        } else {
            console.error( err );
        }
    });
};

var saveDoc = function( data ) {
    if ( data ) {
        var newDoc = {
            _id: new Date().toISOString(),
            data: data
        };
        db.put( newDoc, function callback( err, result ) {
            if (!err) {
                console.log('Successfully posted item');
            } else {
                console.error( err );
            }
        });
    } else {
        console.error('You tried to submit empty data.');
    }

    document.getElementById('data').value = '';
};

var resetDocs = function() {
    db.destroy();
};

var dataform = document.getElementById('dataform');
dataform.addEventListener('submit', function( ev ) {
    ev.preventDefault();

    saveDoc( document.getElementById('data').value );

    showDocs();
});
dataform.addEventListener('reset', function( ev ) {
    ev.preventDefault();

    resetDocs();
    showDocs();
});

showDocs();
