// ========= ID Mapping ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

// ========= @HNhat chỉnh sửa từ @Ohoang7 ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);

obj.Attention = "Bạn đã được nâng cấp GOLD bởi HNhat";

var fakeSubscription = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: "2024-07-28T01:04:17Z",
  store: "app_store"
};

var fakeEntitlement = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.hnhat.premium.gold",
  expires_date: "2099-12-18T01:04:17Z"
};

const match = Object.keys(mapping).find(key => ua.includes(key));

if (match) {
  let [entitlementKey, productId] = mapping[match];
  if (productId) {
    fakeEntitlement.product_identifier = productId;
    obj.subscriber.subscriptions[productId] = fakeSubscription;
  } else {
    obj.subscriber.subscriptions["com.hnhat.premium.gold"] = fakeSubscription;
  }
  obj.subscriber.entitlements[entitlementKey] = fakeEntitlement;
} else {
  obj.subscriber.subscriptions["com.hnhat.premium.gold"] = fakeSubscription;
  obj.subscriber.entitlements["pro"] = fakeEntitlement;
}

obj.subscriber.badge = "gold";
obj.subscriber.is_gold = true;
obj.subscriber.user_type = "gold";
obj.subscriber.has_gold_badge = true;
obj.subscriber.gold_access = true;
obj.subscriber.vip_level = "gold";

$done({ body: JSON.stringify(obj) });
