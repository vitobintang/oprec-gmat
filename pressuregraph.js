function rand4() {
    return Math.random() * (110 - 125 +1) + 125;
  }

  var time4 = new Date();

  var data4 = [{
    x: [time4],
    y: [rand4],
    mode: 'lines',
    line: {
      color: '#FFFF00',
      shape: 'spline'
    }
  }]

  var layout4 = {
    title: 'Pressure',
    titlefont: {size: 20}
  };

  Plotly.newPlot('pressure', data4, layout4);

  var cnt4 = 0;

  var interval4 = setInterval(function() {

    var time4 = new Date();

    var update4 = {
      x:  [[time4]],
      y: [[rand4()]]
    }

    var olderTime4 = time4.setMinutes(time4.getMinutes() - 1);
    var futureTime4 = time4.setMinutes(time4.getMinutes() + 1);

    var minuteView4 = {
      xaxis: {
        type: 'date',
        range: [olderTime4,futureTime4]
      }
    };

    Plotly.relayout('pressure', minuteView4);
    Plotly.extendTraces('pressure', update4, [0])
  }, 1000);
