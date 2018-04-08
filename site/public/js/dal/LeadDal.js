class LeadDal extends BaseDal{
    constructor()
    {
        super('leads', Lead, 'fullName', 'email', 'datetime', 'phone', 'password');
    }

    saveLead(lead){
        return this.save(lead);
    }

    getAllLeads(){
        return this.getAll();
    }
}