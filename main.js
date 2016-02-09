angular.module('moduleOne',[])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', 'content', function($scope, content){
	   	$scope.gallery = content.gallery
		$scope.blogs = content.blogs
		$scope.testimonials = content.testimonials


	}])
angular.module('moduleOne')
	.controller('adminController', ['$scope', 'content', function($scope, content ){
		
		$scope.gallery = content.gallery
		$scope.blogs = content.blogs
		$scope.testimonials = content.testimonials	

		var BlogPost = function(date, headline, body) {
			this.date = date,
			this.headline = headline,
			this.body = body 
			}

		var Review = function(name, body){
			this.name = name,
			this.body = body
		} 
		
		$scope.submitPic = function(content){
			$scope.gallery.push($scope.image)
			$scope.image = {}
		}
		$scope.showRemove = function(photo){
			photo.showBtn = true
		}
		$scope.removePic = function(photo){
			var index = $scope.gallery.indexOf(photo)
			$scope.gallery.splice(index, 1)
		}
		$scope.submitBlog = function(){
			var blog = new BlogPost(entry.date, entry.headline, entry.body)
			$scope.blogs.push(blog)
		}
		$scope.submitTestimony = function(){
			var rev = new Review(review.name, review.date)
			$scope.testimonials.push(rev)
		}

	}])

angular.module('moduleOne')
	.factory('content', [ function(){
		var gallery = [{image:"images/stock-1.jpg"}, 
		{image:"images/stock-2.jpg"}, 
		{image:"images/stock-3.jpg"},
		{image:"images/stock-4.jpg"}]
		var blogs = []
		var testimonials = []
		return {
			gallery		: gallery,
			blogs		: blogs,
			testimonials: testimonials
		}
	}])		

