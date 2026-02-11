class ExpressError extends Error {
    co
    constructor(statuscode,message){ 
        super();
        this.statuscode=statuscode;
        this.message=message;
    }
}
module.exports=ExpressError;