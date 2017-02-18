
angular.module('myApp').factory('employeeFactory',function(){

		var employees = [{name : 'rajesh', age: 24, employeeId: 0001, salary: 40000},
						{name : 'ramesh', age: 22, employeeId: 0001, salary: 40000},
						{name : 'rakesh', age: 26, employeeId: 0001, salary:40000}];

		return {
			
			getEmployees : function(){
				return employees;
			}

		}
})