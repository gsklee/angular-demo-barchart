'use strict';

angular.module('angularDemoBarchartApp').

factory('Data', function(
    $q,
    $resource
){
    return {
        retrieve: function(name) {
            var _result = [],
                _deferred = $q.defer();

            _result.$promise = _deferred.promise;

            switch (name) {
                case 'age-structure':
                    $q.all([
                        $resource('/data/taiwan-percentage-of-young-population.json').query().$promise,
                        $resource('/data/taiwan-percentage-of-working-population.json').query().$promise
                    ]).then(function(response) {
                        angular.forEach(response[0], function(data, k1) {
                            angular.forEach(data.regions, function(region, k2) {
                                region['young%'] = region.value;
                                region['working%'] = response[1][k1].regions[k2].value;
                                region['elderly%'] = +(100 - region['young%'] - region['working%']).toFixed(2);
                                delete region.value;
                            });

                            _result.push(data);
                        });

                        _deferred.resolve(_result);
                    });

                    break;
                case 'regions':
                    $resource('/data/taiwan-percentage-of-young-population.json').query().$promise.then(function(response) {
                        angular.forEach(response[0].regions, function(region) {
                            _result.push(region.name);
                        });

                        _deferred.resolve(_result);
                    });

                    break;
            }

            return _result;
        }
    };
});
