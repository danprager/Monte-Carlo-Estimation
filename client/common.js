if (Meteor.isClient) {

    Template.estimations.helpers({
      simulations: function () { return Session.get('simulation') },
      chart: function () { return Session.get('chart'); },
      median: function () { return Session.get('median') },
      lower: function () { return Session.get('lower') },
      upper: function () { return Session.get('upper') }
    });

      Template.navbar.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });

    Template.estimations.events({
      'click #btnsim': function () {

      event.preventDefault();
      var runs = 250; //up this for final edition
      var iterations;
      var past_sprints = document.getElementById("past_sprints").value.replace(',', ' ').split(' ').map(function(s){return parseInt(s, 10)});
      var stories = document.getElementById('project_size').value;
      var simulations = [];

      var choice = function(xs) { return xs[Math.floor(Math.random() * xs.length)]; }	 

      var simulate = function(s) {
	  result = 0;
	  while (s > 0) {
              done = choice(past_sprints);
	      result = result + (done > s ? s / done : 1);
	      s = s - done;
	  }
          return result;
      }

      //Create an array of simulated sprints * the number of runs
      for (i = 0; i < runs+1; i++) {          
	  simulations.push(simulate(stories));
        }
      simulations = simulations.map(function(x) { return Math.round(x*100) / 100 });
      simulations.sort(function (a, b) { return a - b; });


      var range = function(n) {
	  var result = [];
	  for (i=0; i<n; i++) {
	      result.push(i);
	      }
	  return result;
      }

      var dilute = function (xs) {
	  var result = [];
	  var step = xs.length / 100.0;
	  for (i=0; i < 101; i++) {  result.push(xs[Math.floor(i*step)]); }
	  return result; 
      }

      var googleChart = function(sims) {
	  var m = Math.floor(sims[0]);
	  var M = Math.ceil(sims[sims.length-1]);
	  var scale = function (x) { return Math.round(1000 * (x-m) / (M - m)) / 10 };

	  return "https://chart.googleapis.com/chart"
	      + "?cht=lxy"
	      + "&chs=300x300"
	      + "&chxt=x,y"
	      + "&chts=000000,20"
	      + "&chco=0000FF"
	      + "&chg=" + Math.round(100 / (M - m)) + ",10"
	      + "&chxr=0," + m + "," + M + "|1,0,100"
	      + "&chd=t:"
	      + dilute(sims).map(scale).join(',')
	      + "|"
	      + range(101).join(',');
      }
	  
     var getSimulationValue = function (x) {
	 return Math.round(10 * simulations[Math.floor(runs * x)]) / 10.0; 
     }


      Session.set('simulation', simulations);
      Session.set('chart', googleChart(simulations));
      Session.set('median', getSimulationValue(0.5));
      Session.set('lower',  getSimulationValue(0.05));
      Session.set('upper',  getSimulationValue(0.95));

      document.getElementById("results").removeAttribute("hidden");
      }
    });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
