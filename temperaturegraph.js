function rand3() {
    return Math.random() * (35 - 30 +1) + 30;
  }

  var time3 = new Date();

  var data3 = [{
    x: [time3],
    y: [rand3],
    mode: 'lines',
    line: {
      color: '#0000FF',
      shape: 'spline'
    }
  }]

  var layout3 = {
    title: 'Temperature',
    titlefont: {size: 20}
  };

  Plotly.newPlot('temperature', data3, layout3);

  var cnt3 = 0;

  var interval3 = setInterval(function() {

    var time3 = new Date();

    var update3 = {
      x:  [[time3]],
      y: [[rand3()]]
    }

    var olderTime3 = time3.setMinutes(time3.getMinutes() - 1);
    var futureTime3 = time3.setMinutes(time3.getMinutes() + 1);

    var minuteView3 = {
      xaxis: {
        type: 'date',
        range: [olderTime3,futureTime3]
      }
    };

    Plotly.relayout('temperature', minuteView3);
    Plotly.extendTraces('temperature', update3, [0])
  }, 1000);
