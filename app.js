angular.module('weatherApp', ['ngAnimate'])
  .controller('WeatherController', function ($timeout) {
    var vm = this;

    // Hard-coded weather data
    vm.weather = {
      city: 'Your City',
      temperature: 25,
      climate: 'Sunny',
      sunrise: '6:00 AM',
      sunset: '8:00 PM'
    };

    //animation on page load
    $timeout(function () {
      vm.animate = true;
    }, 500);
  });
