/**
 * @file
 * Word counter and soft limit for Appreciation Station message (max 30 words).
 */

(function ($, Drupal) {
  'use strict';

  var MAX_WORDS = 30;

  /**
   * Count words (trim, split on whitespace).
   */
  function countWords(text) {
    text = $.trim(text || '');
    if (!text) {
      return 0;
    }
    return text.split(/\s+/).filter(function (w) {
      return w.length > 0;
    }).length;
  }

  Drupal.behaviors.sarAppreciationWordLimit = {
    attach: function (context) {
      $(context).find('textarea[name="appreciation_message"]').once('sar-appreciation-word-limit').each(function () {
        var $textarea = $(this);
        var $item = $textarea.closest('.form-item, .js-form-item');
        if (!$item.length) {
          $item = $textarea.parent();
        }

        var $counter = $('<div class="appreciation-word-counter" aria-live="polite"></div>');
        $item.append($counter);

        function update() {
          var count = countWords($textarea.val());

          if (document.documentElement.lang.indexOf('ar') === 0) {
            $counter.text(Drupal.t('Words') + ' ' + MAX_WORDS + '/' + count);
          } else {
            $counter.text(count + '/' + MAX_WORDS + ' ' + Drupal.t('Words'));
          }

          $counter.toggleClass('is-over-limit', count > MAX_WORDS);
          $textarea.toggleClass('appreciation-message-over-limit', count > MAX_WORDS);
        }

        $textarea.on('input.sarAppreciationWordLimit keyup.sarAppreciationWordLimit change.sarAppreciationWordLimit', update);
        update();
      });
    }
  };

})(jQuery, Drupal);
