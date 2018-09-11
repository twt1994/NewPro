import Api from '@/lib/api';

export default {
    /**
     * 获取token
     * @param 
     */
    getAuthenication(){
    	var params = {
    		"username":"admin",
    		"password":"admin",
    		"channel":"MOB"
    	}
    	var _this = this
    	Api.files('/getAuthenication',params)
	    	.then(function(data){
		    	_this.authorization = data.headers['authorization'];
		    	_this.getproducts();
		    })
	    	.catch(function(error){
	    		console.log(error)
	    	})
    }
};
