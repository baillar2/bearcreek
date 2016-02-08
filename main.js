angular.module('moduleOne',[])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', 'content', function($scope, content){
		


	}])
angular.module('moduleOne')
	.controller('adminController', ['$scope', 'content', function($scope, content, ){




	}])

angular.module('moduleOne')
	.factory('content', [function(){
		$scope.gallery = []
		$scope.blogs = []
		$scope.testimonials = []
		return {
			gallery		: 	$scope.gallery,
			blogs		: 	$scope.blogs,
			testimonials: 	$scope.testimonials
		}
	}])		

