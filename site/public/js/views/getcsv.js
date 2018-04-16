(function(){
    let leadsCsvExport = new LeadsCsvExport();

    $(document).ready(() => {
        $('#btn-get-lead-csv').click(() => {
            leadsCsvExport.export();
        });
    });
})();
