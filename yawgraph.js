        function rand() {
            return Math.random() * (0.5 - -0.5 + 1) + -0.5;
          }
  
          var time = new Date();
  
          var data = [{
            x: [time],
            y: [rand],
            mode: 'lines',
            line: {
              color: '#80CAF6',
              shape: 'spline'
            }
          }]
  
          var layout = {
            title: 'Yaw',
            titlefont: {size: 20}
          };
  
          Plotly.newPlot('yaw', data, layout);
  
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
  
            Plotly.relayout('yaw', minuteView);
            Plotly.extendTraces('yaw', update, [0])
          }, 1000);