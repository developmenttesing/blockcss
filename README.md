File: themes/sar/templates/block/home/block--webform.html.twig

{#
/**
 * @file
 * Home right sidebar: The Appreciation Station webform block.
 */
#}
{%
  set classes = [
    'block',
    'block-' ~ configuration.provider|clean_class,
    'block-' ~ plugin_id|clean_class,
  ]
%}
<div{{ attributes.addClass(classes) }}>
  <div class="wBack01 clearfix mb-3">
    <div class="sarTitle03"{{ title_attributes }}>
      {% if language == 'ar' %}
        محطة تقدير
      {% else %}
        The Appreciation Station
      {% endif %}
    </div>
    {{ title_prefix }}
    {{ title_suffix }}
    {% block content %}
      {{ content }}
    {% endblock %}
  </div>
</div>
