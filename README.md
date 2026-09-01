uuid: 1537a40f-daaa-4b4a-8535-6f0102885e2a
langcode: en
status: true
dependencies:
  config:
    - system.menu.admin
    - webform.webform.report_an_issue
  module:
    - csv_serialization
    - rest
    - serialization
    - user
    - views_data_export
    - webform
    - webform_views
id: we_care_requests
label: 'We Care requests'
module: views
description: 'Search We Care submissions by Request ID'
tag: ''
base_table: webform_submission
base_field: sid
display:
  default:
    id: default
    display_title: Default
    display_plugin: default
    position: 0
    display_options:
      title: 'We Care requests'
      fields:
        serial:
          id: serial
          table: webform_submission
          field: serial
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: serial
          plugin_id: field
          label: 'Request ID'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: number_integer
          settings:
            thousand_separator: ''
            prefix_suffix: true
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        created:
          id: created
          table: webform_submission
          field: created
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: created
          plugin_id: field
          label: Created
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: timestamp
          settings:
            date_format: medium
            custom_date_format: ''
            timezone: ''
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        uid:
          id: uid
          table: webform_submission
          field: uid
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: uid
          plugin_id: field
          label: User
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: target_id
          type: entity_reference_label
          settings:
            link: true
          group_column: target_id
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        langcode:
          id: langcode
          table: webform_submission
          field: langcode
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: langcode
          plugin_id: field
          label: Language
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: language
          settings:
            link_to_entity: false
            native_language: false
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        remote_addr:
          id: remote_addr
          table: webform_submission
          field: remote_addr
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: remote_addr
          plugin_id: field
          label: 'IP address'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: string
          settings:
            link_to_entity: false
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        webform_submission_value_4:
          id: webform_submission_value_4
          table: webform_submission_field_report_an_issue_employee_id
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Employee ID'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_5:
          id: webform_submission_value_5
          table: webform_submission_field_report_an_issue_name
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Name
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value:
          id: webform_submission_value
          table: webform_submission_field_report_an_issue_concerned_bu_categories_
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Business Unit'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_7:
          id: webform_submission_value_7
          table: webform_submission_field_report_an_issue_other_concerned_bu_category
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Other Business Unit'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_1:
          id: webform_submission_value_1
          table: webform_submission_field_report_an_issue_feedback_type
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Category
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_8:
          id: webform_submission_value_8
          table: webform_submission_field_report_an_issue_other_feedback_type
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Other Category'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_2:
          id: webform_submission_value_2
          table: webform_submission_field_report_an_issue_concerned_hr_function
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Concerned HR Function'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_9:
          id: webform_submission_value_9
          table: webform_submission_field_report_an_issue_other_concerned_hr_function
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Other Concerned HR Function'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_6:
          id: webform_submission_value_6
          table: webform_submission_field_report_an_issue_title
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Title
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_3:
          id: webform_submission_value_3
          table: webform_submission_field_report_an_issue_description
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Description
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        operations:
          id: operations
          table: webform_submission
          field: operations
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          plugin_id: entity_operations
          label: Operations
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          destination: false
      pager:
        type: mini
        options:
          offset: 0
          items_per_page: 25
          total_pages: null
          id: 0
          tags:
            next: ››
            previous: ‹‹
          expose:
            items_per_page: false
            items_per_page_label: 'Items per page'
            items_per_page_options: '5, 10, 25, 50'
            items_per_page_options_all: false
            items_per_page_options_all_label: '- All -'
            offset: false
            offset_label: Offset
      exposed_form:
        type: basic
        options:
          submit_button: Apply
          reset_button: true
          reset_button_label: Reset
          exposed_sorts_label: 'Sort by'
          expose_sort_order: true
          sort_asc_label: Asc
          sort_desc_label: Desc
      access:
        type: perm
        options:
          perm: 'access content'
      cache:
        type: tag
        options: {  }
      empty:
        area_text_custom:
          id: area_text_custom
          table: views
          field: area_text_custom
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: text_custom
          empty: true
          content: 'No submission match the selected filters.'
          tokenize: false
      sorts:
        created:
          id: created
          table: webform_submission
          field: created
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: created
          plugin_id: date
          order: DESC
          expose:
            label: ''
            field_identifier: ''
          exposed: false
          granularity: second
      arguments: {  }
      filters:
        webform_id:
          id: webform_id
          table: webform_submission
          field: webform_id
          entity_type: webform_submission
          entity_field: webform_id
          plugin_id: bundle
          value:
            report_an_issue: report_an_issue
          group: 1
          expose:
            operator_limit_selection: false
            operator_list: {  }
        serial:
          id: serial
          table: webform_submission
          field: serial
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: serial
          plugin_id: numeric
          operator: '='
          value:
            min: ''
            max: ''
            value: ''
          group: 1
          exposed: true
          expose:
            operator_id: serial_op
            label: 'Filter by Request ID'
            description: ''
            use_operator: false
            operator: serial_op
            operator_limit_selection: false
            operator_list: {  }
            identifier: request_id
            required: false
            remember: false
            multiple: false
            remember_roles:
              authenticated: authenticated
              anonymous: '0'
              administrator: '0'
              hr_content_publisher: '0'
              hr_content_creator: '0'
              hr_content_reviewer: '0'
              corporate_communications_marketing_ccm_creator: '0'
              corporate_communications_marketing_ccm_approver: '0'
              hr_recruiter_creator: '0'
              hr_recruiter_publisher: '0'
              user_role_it: '0'
              vice_president: '0'
              system_admin: '0'
              appreciation_initial_reviewer: '0'
              appreciation_final_reviewer: '0'
              appreciation_publisher: '0'
            min_placeholder: ''
            max_placeholder: ''
            placeholder: ''
          is_grouped: false
          group_info:
            label: ''
            description: ''
            identifier: ''
            optional: true
            widget: select
            multiple: false
            remember: false
            default_group: All
            default_group_multiple: {  }
            group_items: {  }
        name:
          id: name
          table: webform_submission_field_report_an_issue_name
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field_filter
          operator: contains
          value: ''
          group: 1
          exposed: true
          expose:
            operator_id: name_op
            label: Name
            description: ''
            use_operator: false
            operator: name_op
            operator_limit_selection: false
            operator_list: {  }
            identifier: name
            required: false
            remember: false
            multiple: false
            remember_roles:
              authenticated: authenticated
              anonymous: '0'
              administrator: '0'
              hr_content_publisher: '0'
              hr_content_creator: '0'
              hr_content_reviewer: '0'
              corporate_communications_marketing_ccm_creator: '0'
              corporate_communications_marketing_ccm_approver: '0'
              hr_recruiter_creator: '0'
              hr_recruiter_publisher: '0'
              user_role_it: '0'
              vice_president: '0'
              system_admin: '0'
              appreciation_initial_reviewer: '0'
              appreciation_final_reviewer: '0'
              appreciation_publisher: '0'
            placeholder: ''
          is_grouped: false
          group_info:
            label: ''
            description: ''
            identifier: ''
            optional: true
            widget: select
            multiple: false
            remember: false
            default_group: All
            default_group_multiple: {  }
            group_items: {  }
        feedback_type:
          id: feedback_type
          table: webform_submission_field_report_an_issue_feedback_type
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_select_filter
          operator: in
          value:
            All: All
          group: 1
          exposed: true
          expose:
            operator_id: feedback_type_op
            label: Category
            description: ''
            use_operator: false
            operator: feedback_type_op
            operator_limit_selection: false
            operator_list: {  }
            identifier: category
            required: false
            remember: false
            multiple: false
            remember_roles:
              authenticated: authenticated
              anonymous: '0'
              administrator: '0'
              hr_content_publisher: '0'
              hr_content_creator: '0'
              hr_content_reviewer: '0'
              corporate_communications_marketing_ccm_creator: '0'
              corporate_communications_marketing_ccm_approver: '0'
              hr_recruiter_creator: '0'
              hr_recruiter_publisher: '0'
              user_role_it: '0'
              vice_president: '0'
              system_admin: '0'
              appreciation_initial_reviewer: '0'
              appreciation_final_reviewer: '0'
              appreciation_publisher: '0'
            reduce: false
          is_grouped: false
          group_info:
            label: ''
            description: ''
            identifier: ''
            optional: true
            widget: select
            multiple: false
            remember: false
            default_group: All
            default_group_multiple: {  }
            group_items: {  }
          reduce_duplicates: false
        concerned_hr_function:
          id: concerned_hr_function
          table: webform_submission_field_report_an_issue_concerned_hr_function
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_select_filter
          operator: in
          value:
            All: All
          group: 1
          exposed: true
          expose:
            operator_id: concerned_hr_function_op
            label: 'Concerned HR Function'
            description: ''
            use_operator: false
            operator: concerned_hr_function_op
            operator_limit_selection: false
            operator_list: {  }
            identifier: hr_function
            required: false
            remember: false
            multiple: false
            remember_roles:
              authenticated: authenticated
              anonymous: '0'
              administrator: '0'
              hr_content_publisher: '0'
              hr_content_creator: '0'
              hr_content_reviewer: '0'
              corporate_communications_marketing_ccm_creator: '0'
              corporate_communications_marketing_ccm_approver: '0'
              hr_recruiter_creator: '0'
              hr_recruiter_publisher: '0'
              user_role_it: '0'
              vice_president: '0'
              system_admin: '0'
              appreciation_initial_reviewer: '0'
              appreciation_final_reviewer: '0'
              appreciation_publisher: '0'
            reduce: false
          is_grouped: false
          group_info:
            label: ''
            description: ''
            identifier: ''
            optional: true
            widget: select
            multiple: false
            remember: false
            default_group: All
            default_group_multiple: {  }
            group_items: {  }
          reduce_duplicates: false
        concerned_bu:
          id: concerned_bu
          table: webform_submission_field_report_an_issue_concerned_bu_categories_
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_select_filter
          operator: in
          value:
            All: All
          group: 1
          exposed: true
          expose:
            operator_id: concerned_bu_op
            label: 'Business Unit'
            description: ''
            use_operator: false
            operator: concerned_bu_op
            operator_limit_selection: false
            operator_list: {  }
            identifier: business_unit
            required: false
            remember: false
            multiple: false
            remember_roles:
              authenticated: authenticated
              anonymous: '0'
              administrator: '0'
              hr_content_publisher: '0'
              hr_content_creator: '0'
              hr_content_reviewer: '0'
              corporate_communications_marketing_ccm_creator: '0'
              corporate_communications_marketing_ccm_approver: '0'
              hr_recruiter_creator: '0'
              hr_recruiter_publisher: '0'
              user_role_it: '0'
              vice_president: '0'
              system_admin: '0'
              appreciation_initial_reviewer: '0'
              appreciation_final_reviewer: '0'
              appreciation_publisher: '0'
            reduce: false
          is_grouped: false
          group_info:
            label: ''
            description: ''
            identifier: ''
            optional: true
            widget: select
            multiple: false
            remember: false
            default_group: All
            default_group_multiple: {  }
            group_items: {  }
          reduce_duplicates: false
      filter_groups:
        operator: AND
        groups:
          1: AND
      style:
        type: table
      row:
        type: fields
      query:
        type: views_query
        options:
          query_comment: ''
          disable_sql_rewrite: true
          distinct: false
          replica: false
          query_tags: {  }
      relationships: {  }
      header: {  }
      footer: {  }
      display_extenders: {  }
    cache_metadata:
      max-age: -1
      contexts:
        - 'languages:language_content'
        - 'languages:language_interface'
        - url
        - url.query_args
        - user
        - user.permissions
      tags: {  }
  data_export_1:
    id: data_export_1
    display_title: 'CSV Export'
    display_plugin: data_export
    position: 2
    display_options:
      fields:
        serial:
          id: serial
          table: webform_submission
          field: serial
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: serial
          plugin_id: field
          label: 'Request ID'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: number_integer
          settings:
            thousand_separator: ''
            prefix_suffix: true
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        created:
          id: created
          table: webform_submission
          field: created
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: created
          plugin_id: field
          label: Created
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: timestamp
          settings:
            date_format: medium
            custom_date_format: ''
            timezone: ''
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        uid:
          id: uid
          table: webform_submission
          field: uid
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: uid
          plugin_id: field
          label: User
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: target_id
          type: entity_reference_label
          settings:
            link: true
          group_column: target_id
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        langcode:
          id: langcode
          table: webform_submission
          field: langcode
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: langcode
          plugin_id: field
          label: Language
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: language
          settings:
            link_to_entity: false
            native_language: false
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        remote_addr:
          id: remote_addr
          table: webform_submission
          field: remote_addr
          relationship: none
          group_type: group
          admin_label: ''
          entity_type: webform_submission
          entity_field: remote_addr
          plugin_id: field
          label: 'IP address'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          click_sort_column: value
          type: string
          settings:
            link_to_entity: false
          group_column: value
          group_columns: {  }
          group_rows: true
          delta_limit: 0
          delta_offset: 0
          delta_reversed: false
          delta_first_last: false
          multi_type: separator
          separator: ', '
          field_api_classes: false
        webform_submission_value_4:
          id: webform_submission_value_4
          table: webform_submission_field_report_an_issue_employee_id
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Employee ID'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_5:
          id: webform_submission_value_5
          table: webform_submission_field_report_an_issue_name
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Name
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value:
          id: webform_submission_value
          table: webform_submission_field_report_an_issue_concerned_bu_categories_
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Business Unit'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_7:
          id: webform_submission_value_7
          table: webform_submission_field_report_an_issue_other_concerned_bu_category
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Other Business Unit'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_1:
          id: webform_submission_value_1
          table: webform_submission_field_report_an_issue_feedback_type
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Category
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_8:
          id: webform_submission_value_8
          table: webform_submission_field_report_an_issue_other_feedback_type
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Other Category'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_2:
          id: webform_submission_value_2
          table: webform_submission_field_report_an_issue_concerned_hr_function
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Concerned HR Function'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_9:
          id: webform_submission_value_9
          table: webform_submission_field_report_an_issue_other_concerned_hr_function
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: 'Other Concerned HR Function'
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_6:
          id: webform_submission_value_6
          table: webform_submission_field_report_an_issue_title
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Title
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
        webform_submission_value_3:
          id: webform_submission_value_3
          table: webform_submission_field_report_an_issue_description
          field: webform_submission_value
          relationship: none
          group_type: group
          admin_label: ''
          plugin_id: webform_submission_field
          label: Description
          exclude: false
          alter:
            alter_text: false
            text: ''
            make_link: false
            path: ''
            absolute: false
            external: false
            replace_spaces: false
            path_case: none
            trim_whitespace: false
            alt: ''
            rel: ''
            link_class: ''
            prefix: ''
            suffix: ''
            target: ''
            nl2br: false
            max_length: 0
            word_boundary: true
            ellipsis: true
            more_link: false
            more_link_text: ''
            more_link_path: ''
            strip_tags: false
            trim: false
            preserve_tags: ''
            html: false
          element_type: ''
          element_class: ''
          element_label_type: ''
          element_label_class: ''
          element_label_colon: true
          element_wrapper_type: ''
          element_wrapper_class: ''
          element_default_classes: true
          empty: ''
          hide_empty: false
          empty_zero: false
          hide_alter_empty: true
          webform_element_format: value
          webform_multiple_value: true
          webform_multiple_delta: 0
      style:
        type: data_export
        options:
          formats:
            csv: csv
          csv_settings:
            delimiter: ','
            enclosure: '"'
            escape_char: \
            strip_tags: true
            trim: true
            encoding: utf8
            utf8_bom: '0'
            use_serializer_encode_only: false
      defaults:
        fields: false
      display_description: ''
      display_extenders: {  }
      path: admin/reports/we-care/export
      displays:
        page_1: page_1
        default: '0'
      filename: ''
      automatic_download: false
      store_in_public_file_directory: false
      custom_redirect_path: false
      redirect_to_display: none
      include_query_params: false
    cache_metadata:
      max-age: -1
      contexts:
        - 'languages:language_content'
        - 'languages:language_interface'
        - request_format
        - url
        - user
        - user.permissions
      tags: {  }
  page_1:
    id: page_1
    display_title: 'We Care requests'
    display_plugin: page
    position: 1
    display_options:
      display_description: ''
      display_extenders: {  }
      path: admin/reports/we-care
      menu:
        type: normal
        title: 'We Care requests'
        description: 'Search and export We Care requests by Request ID, name, category, and other fields.'
        weight: 8
        expanded: false
        menu_name: admin
        parent: system.admin_reports
        context: '0'
    cache_metadata:
      max-age: -1
      contexts:
        - 'languages:language_content'
        - 'languages:language_interface'
        - url
        - url.query_args
        - user
        - user.permissions
      tags: {  }
