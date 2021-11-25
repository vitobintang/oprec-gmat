function rand() {
    return Math.random() * (45 - 35 +1) + 35;
  }

  var time = new Date();

  var data = [{
    x: [time],
    y: [rand],
    mode: 'lines',
    line: {
      color: '#FF00FF',
      shape: 'spline'
    }
  }]

  var layout = {
    title: 'Altitude',
    titlefont: {size: 20}
  };

  Plotly.newPlot('altitude', data, layout);

  var cnt = 0;

  var interval = setInterval(function() {

    var time = new Date();

    var update = {
      x:  [[time]],
      y: [[rand()]]
    }

    var olderTime = time.setMinutes(time.getMinutes() - 1);
    var futureTime = time.setMinutes(time.getMinutes() + 1);

    var minuteView = {
      xaxis: {
        type: 'date',
        range: [olderTime,futureTime]
      }
    };

    Plotly.relayout('altitude', minuteView);
    Plotly.extendTraces('altitude', update, [0])
  }, 1000);
