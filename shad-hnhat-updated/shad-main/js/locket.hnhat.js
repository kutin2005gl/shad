let obj = JSON.parse($response.body);

obj.subscriber = {
  entitlements: {
    gold: {
      expires_date: "2099-12-31T23:59:59Z",
      product_identifier: "locket.gold.premium",
      purchase_date: "2023-01-01T00:00:00Z"
    }
  },
  first_seen: "2023-01-01T00:00:00Z",
  original_application_version: "1.0.0",
  original_purchase_date: "2023-01-01T00:00:00Z",
  subscriptions: {
    "locket.gold.premium": {
      billing_issues_detected_at: null,
      expires_date: "2099-12-31T23:59:59Z",
      is_sandbox: false,
      original_purchase_date: "2023-01-01T00:00:00Z",
      period_type: "active",
      purchase_date: "2023-01-01T00:00:00Z",
      store: "app_store",
      unsubscribe_detected_at: null
    }
  }
};

$done({ body: JSON.stringify(obj) });
