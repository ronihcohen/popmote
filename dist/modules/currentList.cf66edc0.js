app.directive("currentList",function(){return{scope:{},templateUrl:"modules/currentList/view/currentList.html",replace:!0,controller:"currentList",controllerAs:"current"}}).controller("currentList",["currentListService","$timeout",function(a,b){var c=this;a.request("getcurrentlist").then(function(a){c.list=a.data.result.list}),c.select=function(c){a.request("setselection",c).then(function(){a.request("enter").then(function(){b(a.request("enter"),2e3)})})}}]),app.factory("currentListService",["$http",function(a){var b={url:"http://localhost:8008",headers:{Authorization:"cG9wY29ybjpwb3Bjb3Ju"}};return{request:function(c,d){var e={method:"POST",url:b.url,headers:b.headers,data:{id:10,method:c,jsonrpc:"2.0"}};return e.data.params=d?[d]:[],a(e)}}}]);