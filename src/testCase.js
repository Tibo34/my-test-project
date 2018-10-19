class testCase {
	constructor(json) {
		this.json = json;
	}

	getJson(){
		return this.json;
	}

	getRequirement(){
		var obj = JSON.parse(this.json);
		if (undefined !== obj.requirement) {
			return obj.requirement;
		}
		return false;
	}

	// TODO but not like this : https://www.monkeyuser.com/2017/todo/
	getExecutions(){
		var i=0;
		for(var i=0;i<5;i++){
			if(i===2)
			{
				console.log(i);
			}

		}
		
		return null;
	}
}

module.exports = testCase;
