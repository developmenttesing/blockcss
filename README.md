File: themes/sar/templates/node/job-openings/node--job-openings--full.html.twig

{% if node.published_at.value %}
  <div class="bannerTitle02 mb-2">{{ node.published_at.value|date('d M Y') }}</div>
{% endif %}
------------------------------

File: themes/sar/sar.theme
Function: sar_build_job_apply_url()

$deadline = '';
if ($node->hasField('field_application_deadline') && !$node->get('field_application_deadline')->isEmpty()) {
  $date = $node->get('field_application_deadline')->date;
  if ($date) {
    $deadline = $date->format('d M Y');
  }
}
