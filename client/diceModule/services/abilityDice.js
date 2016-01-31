'use strict';

angular.module('freedomsworn')
	.factory('abilityDice', ['$rootScope', 'CoreVars', function($rootScope, CoreVars) {
		var service = {};
		
		service.chosenAbility = {};
		var chosenDie = {};
		var previousDie = {};
		
		
		service.chooseAbility = function(ability){
			
			CoreVars.modalBox = 'abilityDice';
			service.chosenAbility = ability;
		};
		
		service.chooseDie = function(pcDeck, order){
			
      CoreVars.modalBox = '';
      
      chosenDie = pcDeck.dicepool[order];
      
      previousDie = service.chosenAbility.dice;
      
      pcDeck.dicepool[order] = pcDeck.dicepool[0];
      
      if(previousDie.order > 0){
          pcDeck.dicepool[previousDie.order] = previousDie;
      }
      
      pcDeck.abilities[service.chosenAbility.order].dice = chosenDie;
		};
		
		return service;
	}]);