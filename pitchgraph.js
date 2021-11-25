        function rand() {
            return Math.random() * (0.5 - -0.5 +1) + -0.5;
          }
  
          var time = new Date();
  
          var data = [{
            x: [time],
            y: [rand],
            mode: 'lines',
            line: {
              color: '#BFFF00',
              shape: 'spline'
            }
          }]
  
          var layout = {
            title: 'Pitch',
            titlefont: {size: 20}
          };
  
          Plotly.newPlot('pitch', data, layout);
  
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
  
            Plotly.relayout('pitch', minuteView);
            Plotly.extendTraces('pitch', update, [0])
          }, 1000);
  