//= require angular
//= require angular-resource

"use strict";

(function(){
  angular
  .module("inventory", ["ngResource"])
  .controller("inventory_controller", ["$resource", InventoryController]);

  function InventoryController($resource){
    var vm = this;
    var Product = $resource("/products/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.data = Product.query(function(response){
      vm.data.forEach(function(product){
        product.cost = parseFloat(product.cost);
      });
    });
    vm.sort_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }
    vm.total_value = function(){
      var total = 0;
      vm.data.forEach(function(product){
        if(product.quantity){
          total += (product.quantity * product.cost);
        }
      });
      return total.toFixed(2);
    }
    vm.destroy = function(product_index){
      vm.data.splice(product_index, 1);
    }
    vm.new_product = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_product));
      vm.new_product = {};
    }
  }
})();
