app.directive('currentList', function() {
    return {
        scope: {},
        templateUrl: 'modules/currentList/view/currentList.html',
        replace: true,
        controller: 'currentList',
        controllerAs: 'current'
    };
})
    .controller('currentList', function(currentListService, $timeout) {
        var current = this;

        currentListService.request('getcurrentlist').then(function(response){
            current.list = response.data.result.list;
        });

        current.select = function(id){

            currentListService.request('setselection',id).then(function(){
                currentListService.request('enter').then(function(){
                    $timeout (currentListService.request('enter'),2000);
                });

            });
        };
    });