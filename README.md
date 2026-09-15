modules\custom\sar_appreciation_station\js\appreciation-hide-entity-id.js

(function ($, Drupal, once) {
  'use strict';

  function stripId(value) {
    return (value || '').replace(/\s*\(\d+\)\s*$/, '').trim();
  }

  function storeFullValue($input) {
    var full = $input.val() || '';
    if (/\(\d+\)\s*$/.test(full)) {
      $input.data('sar-full-value', full);
      $input.val(stripId(full));
    }
  }

  function restoreFullValue($input) {
    var full = $input.data('sar-full-value');
    if (full) {
      $input.val(full);
    }
  }

  Drupal.behaviors.sarAppreciationHideEntityId = {
    attach: function (context) {
      once('sar-hide-entity-id', 'input.form-autocomplete', context).forEach(function (el) {
        var $input = $(el);
        var name = $input.attr('name') || '';

        // Only receiver fields on this form.
        if (name.indexOf('receiver_name') === -1 && name.indexOf('receiver_bu') === -1) {
          return;
        }

        // After user picks from autocomplete.
        $input.on('autocompleteclose.sarHideId blur.sarHideId', function () {
          storeFullValue($input);
        });

        // Before submit, put "Name (id)" back so Drupal accepts it.
        $input.closest('form').on('submit.sarHideId', function () {
          restoreFullValue($input);
        });

        // If page reloads with a value already set.
        storeFullValue($input);
      });
    }
  };
})(jQuery, Drupal, once);


