USE blubit;

INSERT INTO services (title, short_desc, bullets, display_order) VALUES
('Odoo Implementation', 'Requirement workshops to go-live support.', JSON_ARRAY('Requirement workshops', 'Module configuration', 'Data migration', 'User setup & testing', 'Go-live support'), 1),
('Odoo Customization & Integration', 'Custom modules, reports, and API integrations.', JSON_ARRAY('Custom modules & automation', 'Advanced reporting', 'API integrations', 'Payment & third-party integrations'), 2),
('DevOps & Cloud Infrastructure', 'Reliable cloud hosting and automation.', JSON_ARRAY('Cloud deployment & VPS setup', 'Containerized environments', 'CI/CD pipelines', 'Automated backups', 'Performance monitoring'), 3),
('Data Analytics & Business Intelligence', 'KPI dashboards and data-backed insights.', JSON_ARRAY('KPI dashboards', 'Sales & financial analysis', 'Inventory optimization insights', 'Custom reporting systems'), 4),
('Personalized Predictive ML Models', 'Forecasting and prediction tailored to ERP data.', JSON_ARRAY('Sales trend prediction', 'Demand forecasting', 'Customer churn analysis', 'Inventory forecasting models', 'Custom ML models trained on business data'), 5);

INSERT INTO modules (title, benefit, icon_name, display_order) VALUES
('Accounting & Invoicing', 'Accurate books and faster closing.', 'Calculator', 1),
('Sales & CRM', 'Pipeline visibility and conversion tracking.', 'Handshake', 2),
('Inventory & Warehouse', 'Live stock and reorder control.', 'Boxes', 3),
('Purchase', 'Smarter vendor and procurement workflows.', 'ShoppingCart', 4),
('HR & Payroll', 'Streamlined employee and salary operations.', 'Users', 5),
('POS', 'Quick checkout with unified reporting.', 'ScanLine', 6),
('Manufacturing (MRP)', 'Production planning with traceability.', 'Factory', 7),
('Project & Timesheets', 'Deliver projects on time and budget.', 'Clock3', 8),
('Website & eCommerce', 'Integrated storefront and order flow.', 'Globe', 9);

INSERT INTO proof_stats (label, value, display_order) VALUES
('Go-lives completed', '45+', 1),
('Average delivery speed-up', '32%', 2),
('Support SLA adherence', '99.2%', 3),
('Client retention', '93%', 4);
