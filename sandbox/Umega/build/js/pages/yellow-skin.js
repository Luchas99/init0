$(document).ready(function(){function e(){$("#addNewEvent").modal("hide"),$("#fullcalendar").fullCalendar("renderEvent",{title:$("#inputTitleEvent").val(),start:new Date($("#start").val()),end:new Date($("#end").val()),backgroundColor:$("#inputBackgroundEvent").val(),borderColor:"#FFF"},!0)}toastr.options={closeButton:!0,progressBar:!0,showMethod:"fadeIn",hideMethod:"fadeOut",timeOut:8e3},toastr.warning("You have 4 notifications","Welcome to Umega"),$(".counter").counterUp({delay:10,time:1e3});var t={AU:12190,AR:3510,BR:2023,CA:1563,CN:5745,FR:2555,DE:3305,JP:5390,RU:2476,US:14624},a=[{latLng:[41.9,12.45],name:"Vatican City",earnings:"500"},{latLng:[43.73,7.41],name:"Monaco",earnings:"32"},{latLng:[-.52,166.93],name:"Nauru",earnings:"432"},{latLng:[-8.51,179.21],name:"Tuvalu",earnings:"321"},{latLng:[43.93,12.46],name:"San Marino",earnings:"510"},{latLng:[47.14,9.52],name:"Liechtenstein",earnings:"130"},{latLng:[7.11,171.06],name:"Marshall Islands",earnings:"234"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis",earnings:"329"},{latLng:[3.2,73.22],name:"Maldives",earnings:"120"},{latLng:[35.88,14.5],name:"Malta",earnings:"435"},{latLng:[12.05,-61.75],name:"Grenada",earnings:"321"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines",earnings:"110"},{latLng:[13.16,-59.55],name:"Barbados",earnings:"90"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda",earnings:"230"},{latLng:[-4.61,55.45],name:"Seychelles",earnings:"200"},{latLng:[7.35,134.46],name:"Palau",earnings:"320"},{latLng:[42.5,1.51],name:"Andorra",earnings:"123"},{latLng:[14.01,-60.98],name:"Saint Lucia",earnings:"500"},{latLng:[6.91,158.18],name:"Federated States of Micronesia",earnings:"310"},{latLng:[1.3,103.8],name:"Singapore",earnings:"23"},{latLng:[1.46,173.03],name:"Kiribati",earnings:"58"},{latLng:[-21.13,-175.2],name:"Tonga",earnings:"90"},{latLng:[15.3,-61.38],name:"Dominica",earnings:"239"},{latLng:[-20.2,57.5],name:"Mauritius",earnings:"100"},{latLng:[26.02,50.55],name:"Bahrain",earnings:"225"},{latLng:[.33,6.73],name:"São Tomé and Príncipe",earnings:"150"}];$("#world-map").vectorMap({map:"world_mill",backgroundColor:"rgba(0,0,0,0)",zoomOnScroll:!1,regionStyle:{initial:{fill:"#34495e"}},markers:a,markerStyle:{initial:{fill:"#e74c3c",stroke:"#e74c3c","fill-opacity":1,"stroke-width":10,"stroke-opacity":.2,r:5},hover:{stroke:"#34495e","stroke-width":2,cursor:"pointer"}},onRegionTipShow:function(e,a,n){t.hasOwnProperty(n)&&a.html(a.html()+" ($"+t[n]+")")},onMarkerTipShow:function(e,t,n){t.html(t.html()+" ($"+a[n].earnings+")")}});var n=[[0,57],[1,58],[2,93],[3,11],[4,40],[5,93],[6,29],[7,19],[8,87],[9,14],[10,130],[11,91],[12,80],[13,49],[14,59]],o=[{label:"Orders",data:n,color:"#c0392b"}],r={series:{lines:{show:!0,lineWidth:1},points:{show:!0,lineWidth:0,fill:!0,fillColor:"#c0392b"},shadowSize:0},grid:{hoverable:!0,borderWidth:0},xaxis:{ticks:0},yaxis:{ticks:0},tooltip:{show:!0,content:"%s: %y",defaultTheme:!1},legend:{show:!1}};$.plot($("#flot-order"),o,r);var i=[[0,755],[1,1133],[2,1234],[3,1448],[4,1198],[5,918],[6,583],[7,842],[8,540],[9,665],[10,1195],[11,742],[12,1040],[13,682],[14,1190]],l=[{label:"Revenue",data:i,color:"#d35400"}],s={series:{lines:{show:!0,lineWidth:1},points:{show:!0,lineWidth:0,fill:!0,fillColor:"#d35400"},shadowSize:0},grid:{hoverable:!0,borderWidth:0},xaxis:{ticks:0},yaxis:{ticks:0},tooltip:{show:!0,content:"%s: $%y",defaultTheme:!1},legend:{show:!1}};$.plot($("#flot-revenue"),l,s);var d=[[0,150708],[1,502507],[2,220627],[3,821182],[4,233599],[5,4087866],[6,364625],[7,3064625],[8,236585],[9,1040222],[10,516876],[11,292003]],c=[[0,650708],[1,1102507],[2,417012],[3,495497],[4,887603],[5,564775],[6,2580159],[7,607998],[8,1906411],[9,346237],[10,315699],[11,202003]],m=[[0,"Jan"],[1,"Feb"],[2,"Mar"],[3,"Apr"],[4,"May"],[5,"Jun"],[6,"Jul"],[7,"Aug"],[8,"Sep"],[9,"Oct"],[10,"Nov"],[11,"Dec"]],h=[{label:"New visitors",data:d,color:"#f1c40f",lines:{show:!0,fill:.9,lineWidth:0},curvedLines:{apply:!0,monotonicFit:!0}},{data:d,color:"#f1c40f",lines:{show:!0,lineWidth:0}},{label:"Returning visitors",data:c,color:"#34495e",lines:{show:!0,fill:.9,lineWidth:0},curvedLines:{apply:!0,monotonicFit:!0}},{data:c,color:"#34495e",lines:{show:!0,lineWidth:0}}],g={series:{curvedLines:{active:!0},shadowSize:0},grid:{borderWidth:0,hoverable:!0,labelMargin:15},xaxis:{ticks:m,tickLength:0,font:{color:"#9a9a9a",size:11}},yaxis:{tickLength:0,tickSize:1e6,font:{color:"#9a9a9a",size:11},tickFormatter:function(e,t){return e>0?(e/1e6).toFixed(t.tickDecimals)+" M":(e/1e6).toFixed(t.tickDecimals)}},tooltip:{show:!1},legend:{show:!0,container:$("#flot-visitor-legend"),noColumns:4,labelBoxBorderColor:"#FFF",margin:0}};$.plot($("#flot-visitor"),h,g),$("#flot-visitor").bind("plothover",function(e,t,a){a?$(".flotTip").text(a.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" visitors").css({top:a.pageY+15,left:a.pageX+10}).show():$(".flotTip").hide()}),$("#daterangepicker").daterangepicker({ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract("days",1),moment().subtract("days",1)],"Last 7 Days":[moment().subtract("days",6),moment()],"Last 30 Days":[moment().subtract("days",29),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract("month",1).startOf("month"),moment().subtract("month",1).endOf("month")]},opens:"left",startDate:moment().subtract(29,"days"),endDate:moment(),applyClass:"btn-raised btn-black",cancelClass:"btn-raised btn-default"},function(e,t,a){$("#daterangepicker span").html(e.format("MMMM D, YYYY")+" - "+t.format("MMMM D, YYYY"))}),$("#daterangepicker span").html(moment().subtract(29,"days").format("MMMM D, YYYY")+" - "+moment().format("MMMM D, YYYY")),Morris.Donut({element:"morris-browser",data:[{label:"Chrome",value:40},{label:"Firefox",value:35},{label:"IE",value:25}],resize:!0,colors:["#34495e","#f1c40f","#ecf0f1"],formatter:function(e){return e+"%"}}),$("#esp-comment").easyPieChart({barColor:"#e74c3c",trackColor:"#ecf0f1",scaleColor:!1,scaleLength:0,lineCap:"round",lineWidth:10,size:140,animate:{duration:2e3,enabled:!0}}),$("#esp-photo").easyPieChart({barColor:"#f1c40f",trackColor:"#ecf0f1",scaleColor:!1,scaleLength:0,lineCap:"round",lineWidth:10,size:140,animate:{duration:2e3,enabled:!0}}),$("#esp-user").easyPieChart({barColor:"#e67e22",trackColor:"#ecf0f1",scaleColor:!1,scaleLength:0,lineCap:"round",lineWidth:10,size:140,animate:{duration:2e3,enabled:!0}}),$("#esp-feedback").easyPieChart({barColor:"#1abc9c",trackColor:"#ecf0f1",scaleColor:!1,scaleLength:0,lineCap:"round",lineWidth:10,size:140,animate:{duration:2e3,enabled:!0}});var f=$("#order-table").DataTable({lengthChange:!1,pageLength:5,colReorder:!0,buttons:["copy","excel","pdf","print"]});f.buttons().container().appendTo("#order-table_wrapper .col-sm-6:eq(0)"),$(".draggable li").each(function(){$(this).data("event",{title:$.trim($(this).text()),stick:!0}),$(this).draggable({zIndex:999,revert:!0,revertDuration:0})}),$("#fullcalendar").fullCalendar({header:{left:"prev,next",center:"title",right:"month,agendaWeek,agendaDay"},buttonIcons:{prev:" ti-angle-left",next:" ti-angle-right"},defaultDate:"2016-03-15",editable:!0,droppable:!0,selectable:!0,select:function(e,t,a){$("#start").val(moment(e).format("YYYY/MM/DD hh:mm a")),$("#end").val(moment(t).format("YYYY/MM/DD hh:mm a")),$("#inputTitleEvent").val(""),$("#addNewEvent").modal("show")},eventColor:"#34495e",eventLimit:!0,events:[{title:"All Day Event",start:"2016-03-18",color:"#8e44ad"},{title:"Long Event",start:"2016-03-07",end:"2016-03-10",color:"#c0392b"},{id:999,title:"Repeating Event",start:"2016-03-28T16:00:00",color:"#f1c40f"},{id:999,title:"Repeating Event",start:"2016-03-16T16:00:00",color:"#f1c40f"},{title:"Conference",start:"2016-03-11",end:"2016-03-13",color:"#16a085"},{title:"Meeting",start:"2016-03-12T10:30:00",end:"2016-03-12T12:30:00",color:"#2980b9"},{title:"Lunch",start:"2016-03-12T12:00:00",color:"#34495e"},{title:"Meeting",start:"2016-03-12T14:30:00",color:"#e74c3c"},{title:"Happy Hour",start:"2016-03-12T17:30:00",color:"#95a5a6"},{title:"Dinner",start:"2016-03-12T20:00:00",color:"#1abc9c"},{title:"Birthday Party",start:"2016-03-13T07:00:00",color:"#9b59b6"},{title:"Click for Google",url:"http://google.com/",start:"2016-03-28",color:"#3498db"}],drop:function(){$("#drop-remove").is(":checked")&&$(this).remove()}}),$("#btnAddNewEvent").on("click",function(t){t.preventDefault(),e()}),$("#inputBackgroundEvent").minicolors({theme:"bootstrap"});var u=[[0,75],[1,69],[2,64],[3,65],[4,78],[5,77],[6,75],[7,68],[8,64],[9,62],[10,67],[11,75],[12,73],[13,68],[14,75],[15,72],[16,73],[17,62],[18,76],[19,74],[20,64],[21,77],[22,80],[23,71]],p=[{label:"F",data:u,color:"#fff"}],b={series:{lines:{show:!0,lineWidth:2},points:{show:!0,lineWidth:4},shadowSize:0},grid:{hoverable:!0,borderWidth:0},xaxis:{ticks:0},yaxis:{ticks:0},tooltip:{show:!0,content:"%y %s",defaultTheme:!1},legend:{show:!1}};$.plot($("#flot-weather"),p,b)});