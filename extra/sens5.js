


function make_x_axis() {        
    return d3.svg.axis()
        .scale(x)
         .orient("bottom")
         .ticks(5)
}

function make_y_axis() {        
    return d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
}

var p2 = d3.select("body").style("color","black");

for (var i=0; i<10;i++){console.log(i)}


// var p_blah2 = p2.html("\\\\( h_6 \\\\)");
// var p2_late = p2.transition().delay(750).style("color","red");
// //.transition().style("color","red")

var p3 = p2.append("svg")
    .attr("height",800)
    .attr("width",1600);

// new stuff
//p3.append('image').attr('x',0).attr('y',0).attr('height',800).attr('width',1500).attr("xlink:href","http://www.blueprintmodel.co.uk/images/DSCF1438.jpg").attr('preserveAspectRatio','none')


//p3.append('image').attr('x',0).attr('y',0).attr('height',800).attr('width',1500).attr("xlink:href","http://frontpsych.files.wordpress.com/2011/11/psychedelic.jpeg").attr('preserveAspectRatio','none')

//http://frontpsych.files.wordpress.com/2011/11/psychedelic.jpeg
//<image y="0" x="0" height="250" width="250" //xlink:href="http://www.blueprintmodel.co.uk/images/DSCF1438.jpg" preserveAspectRatio="none"/>

// only changes the color of the first one, regardless of which circle you touch
// $('circle').mouseover(function(){document.querySelector('circle').style.fill = 'yellow';console.log('hello5');})



// WORKING WITH JQUERY I THINK:
//p3.append('circle').attr("cx",50).attr("cy",10).attr("r",20).attr("fill",'blue')
//p3.append('circle').attr("cx",50).attr("cy",20).attr("r",20).attr("fill",'orange')
// $('circle').mouseover(function(){this.style.fill = 'yellow';console.log('hello5');})


//var mouse = document.querySelector('circle')
//mouse.onmouseover= function(){this.style.fill = 'yellow';}


// document.querySelector('#volume').value = (vol-20)/100;}
// console.log('hello5');})

var rev_li4 = dat_line[4].reverse()

p3.append("polyline").attr("points",[dat_line[0],rev_li4,dat_line[0][0]]).attr('fill','gray').attr('stroke-width','2').attr('opacity','0.5')

dat_line[4].reverse()

//var p_blah = p2.append('body').html("\\\\( h_5 \\\\)")

// var p4 = p3
//     // .append("g")
//     // .attr("transform","translate(80,0)")
// .selectAll("circle")
//     .data(circ)
//     .enter()
// .append("circle")
//     .attr("cx",function(d){return d.x;})
//     .attr("cy",function(d){return d.y;})
//     .attr("r",function(d){return d.r;})
//     .attr("fill",function(d){return d.color;})
// .attr("opacity",0.5);
//     // .transition().delay(function(d,i){if(i===0)return 0; else if(i==1) return 500; else return 1000;}).duration(1000).attr("cx",function(d){return d.x-100});

// .attr("stroke","blue")

var p5_pre = d3.scale.linear()
    .domain([0,1])
    .range([750,0]);

// console.log('hello')

var p5_preX = d3.scale.linear()
//KEY ARG1 -- the 2.87
    .domain([0,3.71])
    .range([0,1400]);

var p5_pre2 = d3.svg.axis()
    .scale(p5_preX).ticks(10).tickSize(-750,0,0);
var p5_pre3 = d3.svg.axis()
    .scale(p5_pre).orient('left').ticks(5).tickSize(-1600,0,0);
var p5 = p3.append("g").attr("transform","translate(105,765)").attr('class','david').call(p5_pre2);
var p6 = p3.append("g").attr("transform","translate(105,15)").attr('class','david').call(p5_pre3);

var height = 700
var width = 1500









// p3.append("g")         
//         .attr("class", "grid")
//         .attr("transform", "translate(0," + height + ")")
//         .call(make_x_axis()
//             .tickSize(-height, 0, 0)
//             .tickFormat("")
//         )

// p3.append("g")         
//         .attr("class", "grid")
//         .call(make_y_axis()
//             .tickSize(-width, 0, 0)
//             .tickFormat("")
//         )






//.attr("shape-rendering","crispEdges")
//.attr("shape-rendering","auto")
//.style("shape-rendering","crispEdges")


var M1 = $M(dat_line)

console.log(M1.e(2,2))
console.log(M1.cols())
console.log(M1.rows())
console.log(dat_line[0])
var B = M1.row(3)
console.log(B.elements)

//console.log(M1.row(3).toJSON())
//console.log(typeof(B))
//console.log(b['c'])

p3.append("polyline").attr("points",M1.row(3).elements).attr('fill','none').attr('stroke-width','2').attr('stroke','green').on("mouseover", function(){d3.select(this).style("stroke", "aliceblue");}).on("mouseout", function(){d3.select(this).style("stroke", "green");})

p3.append('line').attr("x1",dat_line[0][0][0]).attr("y1",dat_line[0][0][1]).attr("x2",dat_line[4][0][0]).attr("y2",dat_line[4][0][1]).attr('stroke','orange').attr('stroke-width',5)


// p3.append('text').text('david').attr("x",dat_line[0][0][0]).attr("y",dat_line[0][0][1])
//     .on("mouseover", function(){d3.select(this).attr('opacity',0);})
//     .on("mouseout", function(){d3.select(this).attr('opacity',1);})


    // .on("mouseover", function(){d3.select(this).text("");})
    // .on("mouseout", function(){d3.select(this).text('david');})


//p3.append('

//p3.append('circle').attr("cx",dat_line[0][0][0]).attr("cy",dat_line[0][0][1]).attr('r',10).attr('fill','blaack').append('text').text('mom').attr('x',dat_line[4][0][0]).attr('y',dat_line[4][0][1]);}).on('mouseover',function(){d3.select('circle').attr('opacity',0);}).on('mouseout',function(){d3.select('circle').attr('opacity',1);})



// experimentation with mouseover and mouseout
// p3.append('circle').attr("cx",dat_line[0][0][0]).attr("cy",dat_line[0][0][1]).attr('r',10).attr('fill','blaack').on('mouseover',function(){d3.select('circle').attr('opacity',0);var mom = p3.append('text').text('mom').attr('id','mom').attr('x',dat_line[4][0][0]).attr('y',dat_line[4][0][1])
// ;}).on('mouseout',function(){p3.select('#mom').remove();d3.select('circle').attr('opacity',1);;})


//d3.select('circle').attr('opacity',1)

//p3.selectAll('text').remove();

//d3.selectAll('text').remove();

//text('blah').attr('x',dat_line[0][0][0]).attr('y',dat_line[0][0][1])


//var mom = p3.append('text').text('mom').attr('x',dat_line[4][0][0]).attr('y',dat_line[4][0][1]);

//p3.append('text').text('blah').attr('x',dat_line[0][0][0]).attr('y',dat_line[0][0][1])}).on('mouseout',function(){d3.select(this).attr('opacity',1);})


//.on('mouseover',function(){d3.select(this).attr('y',dat_line[4][0][1]);})


//.attr("x",dat_line[4][0][0]);})


var min_max = $M([dat_line[0],dat_line[4]])



var dat = []

for (var j=0; j<dat_line[0].length;j++){
    dat[j] = {"x1":dat_line[0][j][0], "y1":dat_line[0][j][1], "x2":dat_line[4][j][0], "y2":dat_line[4][j][1]}
}





var p4 = p3.append("g")
.selectAll("line")
    .data(dat)
    .enter()
.append("line")
    .attr("x1",function(d){return d.x1;})
    .attr("y1",function(d){return d.y1;})
    .attr("x2",function(d){return d.x2;})
    .attr("y2",function(d){return d.y2;})
    .attr("stroke",'blue')
    .attr("opacity",0.5)
    .attr("stroke-width",2)
// KEY ARG2 -- the '377'
.on("mouseover",function(d){d3.select(this).style('stroke','red').style('stroke-width',4);p3.append('text').text('time:'+Math.round(100*(d.x2-105)/377)/100 + ' range: '+ Math.round((1-(d.y1-15)/750)*100)/100 + ' to ' + Math.round((1-(d.y2-15)/750)*100)/100).attr('id','mom').attr('x',(d.x1+10)).attr('y',(d.y1-5)).attr('font-size','25px');}) .on("mouseout",function(d){d3.select(this).style('stroke','blue').style('stroke-width',4);p3.select('#mom').remove();})



var p4_line = p3.append("polyline").attr("points",dat_line[0]).attr("id","blah").attr('fill','none').attr('stroke-width','2')

d3.select("input[name=range4]").on("input", function() {
   ind = Math.round((this.value)/10);
   p4_line.transition().ease('linear').attr("points", dat_line[ind]);});
   
//+  'time:'+d.x2 + ' range: '+ d.y1 + ' to ' + d.y2

//('time:'+d.x2 + ' range: '+ d.y1 + ' to ' + d.y2)
   // .text(function(d){return ('time:'+d.x2 + ' range: '+ d.y1 + ' to ' + d.y2);})
   //  .attr("opacity",0)
 
//p3.append('text').text('mom').attr('id','mom').attr('x',d.x1).attr('y',d.y1);}).on('mouseout',function(){p3.select('#mom').remove();})

// .on("mouseout",function(d){d3.select(this).style('stroke','blue').style('stroke-width',4)})

//var tool = p4.append('text').text('david').attr('x',dat_line[4][0][0]).attr('y',dat_line[4][0][1])


// var p4_david = p4.append("line")
//     .attr("x1",function(d){return d.x1;})
//     .attr("y1",function(d){return d.y1;})
//     .attr("x2",function(d){return d.x2;})
//     .attr("y2",function(d){return d.y2;})
//     .attr("stroke",'blue')
//     .attr("opacity",0.5)

//p4_david.on("mouseover",function(d){d3.select(this).attr('stroke','red').attr('stroke-width',4)})

//p4_david.on("mouseover",function(d){tool.style('opacity',0.2);})
// p4_david.on("mouseover", function(d){d3.select(this).append("text").text('david').attr("x",function(d){return d.x2;}).attr("y",function(d){return d.y2;})})


//p4.append('g').selectAll('line').data(dat).enter().on("mouseover",function(d){d3.select(this).attr('stroke','red').attr('stroke-width',4)})


//p4.on("mouseover", function(d){d3.append("text").text('david').attr("x",function(d){return //d.x2;}).attr("y",function(d){return d.y2;})})

//d3.select(this).style("stroke", "aliceblue")


//p4.append("text").text('david').attr("x",function(d){return d.x2;}).attr("y",function(d){return d.y2;})})
//p4.append("text").text('david').attr("x",dat_line[4][0][0]).attr("y",dat_line[4][0][1]);})
//.on("mouseout", function(d){d3.select(this).style("stroke", "green"); p4.selectAll('text').remove();})



//p3.append('text').text('mom').attr('x',dat_line[4][0][0]).attr('y',dat_line[4][0][1])
//;}).on('mouseout',function(){d3.select('circle').attr('opacity',1); d3.selectAll('text').remove();})






//.text('david').attr("x",dat_line[0][0][0]).attr("y",dat_line[0][0][1])

// var p4 = p3.append("g")
// .selectAll("text")
//     .data(dat)
//     .enter()
// .append("text")
//     .attr("x",function(d){return d.x2;})
//     .attr("y",function(d){return d.y2;})
//     .text(function(d){return ('time:'+d.x2 + ' range: '+ d.y1 + ' to ' + d.y2);})
//     .attr("opacity",0)
//     // .attr("x2",function(d){return d.x2;})
//     // .attr("y2",function(d){return d.y2;})
//     // .attr("stroke",'blue')
// //    .attr("opacity",0.5)
//     .on("mouseover", function(){d3.select(this).attr('opacity',1);})
//     .on("mouseout", function(){d3.select(this).attr('opacity',0);})




    // .transition().delay(function(d,i){if(i===0)return 0; else if(i==1) return 500; else return 1000;}).duration(1000).attr("cx",function(d){return d.x-100});





