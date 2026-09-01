<?php

/**
 * @file
 * SAR Job Reporting hooks.
 */

/**
 * Implements hook_views_data_alter().
 */
function sar_job_reporting_views_data_alter(array &$data) {
  if (isset($data['node_field_data'])) {
    $data['node_field_data']['job_applicant_count'] = [
      'title' => t('Applicant count'),
      'help' => t('Number of submitted applications for this job opening.'),
      'field' => [
        'id' => 'job_applicant_count',
      ],
    ];
  }

  if (isset($data['webform_submission'])) {
    $data['webform_submission']['job_opening_nid'] = [
      'title' => t('Job opening ID'),
      'help' => t('Filter applications by job opening node ID, including older submissions matched by job title.'),
      'filter' => [
        'id' => 'job_opening_nid',
      ],
    ];
  }
}

/**
 * Implements hook_preprocess_views_view().
 */
function sar_job_reporting_preprocess_views_view(&$variables) {
  $view = $variables['view'];
  if (!in_array($view->id(), ['job_openings_overview', 'job_application_submissions', 'we_care_requests'], TRUE)) {
    return;
  }
  if ($view->current_display !== 'page_1') {
    return;
  }

  $exposed = $variables['exposed'] ?? [];
  $feed_icons = $variables['feed_icons'] ?? [];

  if ($exposed === [] && $feed_icons === []) {
    return;
  }

  $toolbar_classes = ['sar-job-report-toolbar'];
  if ($view->id() === 'we_care_requests') {
    $toolbar_classes[] = 'sar-we-care-report-toolbar';
  }

  $toolbar = [
    '#type' => 'container',
    '#attributes' => ['class' => $toolbar_classes],
  ];

  if ($exposed !== [] && $exposed !== '') {
    $toolbar['filters'] = [
      '#type' => 'container',
      '#attributes' => ['class' => ['sar-job-report-toolbar__filters']],
      'content' => $exposed,
    ];
  }

  if ($feed_icons !== [] && $feed_icons !== '') {
    $exports = [
      '#type' => 'container',
      '#attributes' => ['class' => ['sar-job-report-toolbar__exports']],
    ];
    if (is_array($feed_icons) && array_keys($feed_icons) === range(0, count($feed_icons) - 1)) {
      foreach ($feed_icons as $delta => $icon) {
        $exports['icon_' . $delta] = $icon;
      }
    }
    else {
      $exports['icons'] = $feed_icons;
    }
    $toolbar['exports'] = $exports;
  }

  $variables['exposed'] = $toolbar;
  $variables['feed_icons'] = [];
}

/**
 * Implements hook_page_attachments().
 */
function sar_job_reporting_page_attachments(array &$attachments) {
  $route = \Drupal::routeMatch()->getRouteName();
  $report_routes = [
    'view.job_openings_overview.page_1',
    'view.job_application_submissions.page_1',
    'view.we_care_requests.page_1',
  ];
  if (in_array($route, $report_routes, TRUE)) {
    $attachments['#attached']['library'][] = 'sar_job_reporting/reporting';
  }
}
