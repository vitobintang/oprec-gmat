        function rand2() {
            return Math.random() * (0.5 - -0.5 +1) + -0.5;
          }
  
          var time2 = new Date();
  
          var data2 = [{
            x: [time2],
            y: [rand2],
            mode: 'lines',
            line: {
              color: '#FF7F7F',
              shape: 'spline'
            }
          }]
  
          var layout2 = {
            title: 'Roll',
            titlefont: {size: 20}
          };
  
          Plotly.newPlot('roll', data2, layout2);
  
          var cnt2 = 0;
  
          var interval2 = setInterval(function() {
  
            var time2 = new Date();
  
            var update2 = {
              x:  [[time2]],
              y: [[rand2()]]
            }
  
            var olderTime2 = time2.setMinutes(time2.getMinutes() - 1);
            var futureTime2 = time2.setMinutes(time2.getMinutes() + 1);
  
            var minuteView2 = {
              xaxis: {
                type: 'date',
                range: [olderTime2,futureTime2]
              }
            };
  
            Plotly.relayout('roll', minuteView2);
            Plotly.extendTraces('roll', update2, [0])
          }, 1000);