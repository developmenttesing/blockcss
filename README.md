.sar-job-reporting-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 0 1.5rem;
}

.sar-job-reporting-card {
  background: #fff;
  border: 1px solid #d4d4d8;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  flex: 1 1 180px;
  max-width: 260px;
  min-width: 160px;
  padding: 1rem 1.25rem;
}

.sar-job-reporting-card__value {
  color: #1a1a1a;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 0.25rem;
}

.sar-job-reporting-card__label {
  color: #5c5c5c;
  font-size: 0.875rem;
  margin: 0;
}

.sar-job-reporting-grid {
  border: 1px solid #d4d4d8;
  border-collapse: collapse;
  margin: 0 0 1.5rem;
  width: 100%;
}

.sar-job-reporting-grid th,
.sar-job-reporting-grid td {
  border: 1px solid #e4e4e7;
  padding: 0.5rem 0.75rem;
  text-align: left;
}

.sar-job-reporting-grid th {
  background: #f4f4f5;
  font-weight: 600;
}

.sar-job-reporting-section-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.sar-job-reporting-summary-wrap {
  margin-bottom: 1.5rem;
}

.sar-job-report-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 1.25rem;
  margin: 0;
  padding: 1rem 1.25rem;
  background: #f8f9fa;
  border: 1px solid #d4d4d8;
  border-radius: 6px;
}

.view-id-job-openings-overview .view-filters,
.view-id-job-application-submissions .view-filters,
.view-id-we-care-requests .view-filters {
  float: none;
  width: 100%;
  margin: 0 0 1.25rem;
  padding: 0;
  background: transparent;
  border: 0;
}

.sar-job-report-toolbar__filters {
  flex: 1 1 520px;
  min-width: 0;
}

.sar-job-report-toolbar__filters .views-exposed-form {
  margin: 0;
}

.sar-job-report-toolbar__filters .form--inline {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 0.75rem 1rem;
}

/*.sar-job-report-toolbar__filters .form-item {
  margin: 0;
}*/

.sar-job-report-toolbar__exports {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  flex: 0 0 auto;
  margin-left: auto;
}

.sar-job-report-toolbar__exports .views-data-export-feed {
  display: inline-block;
  margin: 0;
}

.sar-job-report-toolbar__exports .feed-icon {
  width: auto;
  height: auto;
  overflow: visible;
  text-indent: 0;
  background-image: none !important;
  display: inline-block;
  padding: 0.45rem 0.9rem;
  border: 1px solid #0074bd;
  border-radius: 4px;
  background-color: #fff;
  color: #0074bd;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.sar-job-report-toolbar__exports .feed-icon:hover,
.sar-job-report-toolbar__exports .feed-icon:focus {
  background-color: #0074bd;
  border-color: #0074bd;
  color: #fff;
  text-decoration: none;
}

/* We Care CSV: match Seven Apply/Edit buttons. */
.sar-we-care-report-toolbar .sar-job-report-toolbar__exports .feed-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 4px 1.5em;
  border: 1px solid #a6a6a6;
  border-radius: 20em;
  background-color: #f5f5f2;
  background-image: linear-gradient(to bottom, #fafafa, #e9e9e5);
  color: #333;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.538em;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.sar-we-care-report-toolbar .sar-job-report-toolbar__exports .feed-icon::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background: no-repeat center / contain;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/%3E%3Cpolyline points='7 10 12 15 17 10'/%3E%3Cline x1='12' y1='15' x2='12' y2='3'/%3E%3C/svg%3E");
}

.sar-we-care-report-toolbar .sar-job-report-toolbar__exports .feed-icon:hover,
.sar-we-care-report-toolbar .sar-job-report-toolbar__exports .feed-icon:focus {
  background-color: #e6e4df;
  background-image: linear-gradient(to bottom, #f0f0ed, #dbdbd6);
  border-color: #8e8e8e;
  color: #1a1a1a;
}

@media screen and (max-width: 991px) {
  .sar-job-report-toolbar {
    /*flex-direction: column;*/
    align-items: stretch;
  }

  .sar-job-report-toolbar__exports {
    margin-left: 0;
    justify-content: flex-start;
  }
}
