app.factory('currentListService', function($http){
    var config = {
        'url'    :   'http://localhost:8008',
        'headers':   {'Authorization': 'cG9wY29ybjpwb3Bjb3Ju'}
    };
    return {
        'request': function(method,params){
            var options = {
                'method' :   'POST',
                'url'    :   config.url,
                'headers':   config.headers,
                'data'   :   {'id':10,'method':method,'jsonrpc':'2.0'}
            };
            if (params) {
                options.data.params = [params];
            } else {
                options.data.params = [];
            }
            return $http(options);
        }
    };
});