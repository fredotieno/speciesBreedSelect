var BreedSpeciesMapping = function() {
	var
	speciesSelectElement = $('#species'),
	breedSelectElement = $('#breed'),

	bindEventListenersOnSpeciesSelect = function() {
		speciesSelectElement.change(triggerPopulateBreedOptions)
	},

	clearAllSelectOptions = function() {
		breedSelectElement.html('')
	},

	triggerPopulateBreedOptions = function() {
		var species = $(this).find('option:selected').text()
		populateBreedSelectOptions(species)
	},

	populateBreedSelectOptions = function(speciesSelected) {
		clearAllSelectOptions()
		var speciesList = jsonObject[speciesSelected]
		$.each(speciesList, function(index, value) {
			breedSelectElement.append(
				$('<option/>').val(value).text(value)
			)
		})
	},

	initialiseSelects = function() {
		speciesSelectElement.val('Feline')
		populateBreedSelectOptions('Feline')
		breedSelectElement.val('Abyssinian')
	},

	init = function(){
		bindEventListenersOnSpeciesSelect()
		initialiseSelects()
	};

	return {init: init}
};

var breedSpeciesMapping;
$(function(){
	breedSpeciesMapping = new BreedSpeciesMapping()
	breedSpeciesMapping.init()
})
