//email, nome, datahora
class LeadsCsvExport{
    constructor(){
        this._leadDal = new LeadDal();
    }

    export(){
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "email, nome, data_hora\r\n";
        this._leadDal.getAllLeads()
        .then(items => {
            items.forEach(i =>{
                let columns = [i.email, i.fullName, DateHelper.dateToText(i.datetime)];
                let row = columns.join(",");
                csvContent += row + "\r\n";
            });

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "lead.csv");
            document.body.appendChild(link); 
            link.click();
        });
    }
}