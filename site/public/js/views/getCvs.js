(function(){
    let LeadsCsvExport = new LeadsCsvExport();

    $(document).ready(() => {
        $('#btn-get-lead-csv').click(() => {
            LeadsCsvExport.export();
        });
    });
})();