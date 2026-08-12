* Card wrapper (works even without custom Twig) */
.region-sidebar-second .block-webform,
.region-sidebar-second .block-webform-webform {
  background-color: #fff;
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  overflow: hidden;
}

/* Block title → same as E-Learning Survey / Tools */
.region-sidebar-second .block-webform > h2,
.region-sidebar-second .block-webform .block-title,
.region-sidebar-second .block-webform > .sarTitle03,
.region-sidebar-second .block-webform-webform > h2 {
  font-size: 25px;
  font-weight: 600;
  color: #3c3935;
  line-height: 32px;
  padding: 20px 20px;
  border-bottom: 1px solid #e0e0e0;
  margin: 0 0 20px;
  position: relative;
}

/* Form body padding */
.region-sidebar-second .block-webform .content,
.region-sidebar-second .block-webform form,
.region-sidebar-second .block-webform .webform-submission-form {
  padding: 0 20px 20px;
}

/* Labels */
.region-sidebar-second .block-webform .form-item label,
.region-sidebar-second .block-webform .form-item > label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #3c3935;
  margin-bottom: 6px;
}

.region-sidebar-second .block-webform .form-required::after,
.region-sidebar-second .block-webform label.form-required::after {
  content: " *";
  color: #c00;
  font-weight: 700;
}

/* Inputs / textarea */
.region-sidebar-second .block-webform .form-control,
.region-sidebar-second .block-webform input.form-text,
.region-sidebar-second .block-webform input.form-autocomplete,
.region-sidebar-second .block-webform textarea.form-textarea,
.region-sidebar-second .block-webform select.form-select {
  width: 100%;
  max-width: 100%;
  background: #fff;
  border: 1px solid #cccccc;
  border-radius: 2px;
  color: #3c3935;
  font-size: 14px;
  line-height: 1.4;
  padding: 8px 12px;
  box-shadow: none;
}

.region-sidebar-second .block-webform input:focus,
.region-sidebar-second .block-webform textarea:focus,
.region-sidebar-second .block-webform select:focus {
  border-color: #00778b;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(0, 119, 139, 0.15);
}

/* Readonly sender field */
.region-sidebar-second .block-webform input[readonly],
.region-sidebar-second .block-webform input:disabled {
  background: #f2f2f2;
  color: #666;
}

/* Spacing between fields */
.region-sidebar-second .block-webform .form-item {
  margin-bottom: 14px;
}

/* Word counter */
.region-sidebar-second .block-webform .appreciation-word-limit,
.region-sidebar-second .block-webform .description,
.region-sidebar-second .block-webform .form-item .description {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

/* Submit button — brand teal */
.region-sidebar-second .block-webform .form-actions {
  margin: 8px 0 0;
  padding: 0;
}

.region-sidebar-second .block-webform .form-actions .button,
.region-sidebar-second .block-webform .form-actions .webform-button--submit,
.region-sidebar-second .block-webform input[type="submit"] {
  background: #00778b !important;
  border: 1px solid #00778b !important;
  color: #fff !important;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 2px;
  box-shadow: none;
}

.region-sidebar-second .block-webform .form-actions .button:hover,
.region-sidebar-second .block-webform .form-actions .webform-button--submit:hover,
.region-sidebar-second .block-webform input[type="submit"]:hover {
  background: #005f6f !important;
  border-color: #005f6f !important;
  color: #fff !important;
}

/* Arabic (RTL) */
.LaungAR .region-sidebar-second .block-webform > h2,
.LaungAR .region-sidebar-second .block-webform .block-title {
  text-align: right;
}

/* Narrow sidebar polish */
@media screen and (max-width: 991px) {
  .region-sidebar-second .block-webform > h2,
  .region-sidebar-second .block-webform .block-title {
    font-size: 21px;
    padding: 12px 16px;
    margin-bottom: 14px;
  }

  .region-sidebar-second .block-webform .content,
  .region-sidebar-second .block-webform form,
  .region-sidebar-second .block-webform .webform-submission-form {
    padding: 0 16px 16px;
  }
}
