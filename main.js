angular.module('moduleOne',['ngAnimate'])

angular.module('moduleOne')
	.controller('navController', ['$scope',function($scope){
			
		$scope.aboutLink = function(){
			$scope.$parent.aboutUs = true
			$scope.$parent.services = false
			$scope.$parent.blog = false
			$scope.$parent.contactUs = false
		}
		$scope.servicesLink = function(){	
			$scope.$parent.aboutUs = false
			$scope.$parent.services = true
			$scope.$parent.blog = false
			$scope.$parent.contactUs = false	
		}
		$scope.blogLink = function(){
			$scope.$parent.aboutUs = false
			$scope.$parent.services = false
			$scope.$parent.blog = true
			$scope.$parent.contactUs = false
		}	
		$scope.contactLink = function(){
			$scope.$parent.aboutUs = false
			$scope.$parent.services = false
			$scope.$parent.blog = false
			$scope.$parent.contactUs = true	
		}
	}])
angular.module('moduleOne')
	.controller('controllerOne', ['$scope', 'content', function($scope, content){
	   	$scope.gallery = content.gallery
		$scope.blogs = content.blogs
		$scope.testimonials = content.testimonials
		$scope.aboutUs = true
		$scope.services = false
		$scope.blog = false
		$scope.contactUs = false

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
			$('#gmodalCarousel').carousel('next')
			$('#mainCarousel').carousel('next')
		}
		$scope.submitBlog = function(){
			var blog = new BlogPost($scope.entry.date, $scope.entry.headline, $scope.entry.body)
			$scope.blogs.push(blog)
			console.log($scope.blogs)
			$scope.entry = {}
		}
		$scope.submitTestimony = function(){
			var rev = new Review(review.name, review.date)
			$scope.testimonials.push(rev)
		}

	}])

angular.module('moduleOne')
	.factory('content', [ function(){
		var gallery = [{image:"images/stock1.jpg"}, 
		{image:"images/stock2.jpg"}, 
		{image:"images/stock3.png"},
		{image:"images/stock4.jpg"}]
		var blogs = []
		var testimonials = []
		return {
			gallery		: gallery,
			blogs		: blogs,
			testimonials: testimonials
		}
	}])		