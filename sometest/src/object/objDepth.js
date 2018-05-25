let sample = [
  {
  "icon": "shop",
  "id": 398,
  "index": null,
  "label": "租户权限管理",
  "children": [{
    "icon": null,
    "id": 399,
    "index": "/admin/tenantConfig",
    "label": "租户配置",
    "children": []
  }, {"icon": null, "id": 401, "index": "/admin/tenantRole", "label": "角色管理", "children": []}, {
    "icon": null,
    "id": 400,
    "index": "/admin/superAccount",
    "label": "超管帐户",
    "children": []
  }]
}, {
  "icon": "system-menu",
  "id": 1,
  "index": null,
  "label": "菜单资源管理",
  "children": [{
    "icon": null,
    "id": 16,
    "index": "/admin/resourceManage",
    "label": "资源管理",
    "children": []
  }, {"icon": null, "id": 4, "index": "/admin/menuManage", "label": "菜单管理", "children": []}]
}, {
  "icon": "user",
  "id": 2,
  "index": null,
  "label": "系统用户权限",
  "children": [{"icon": null, "id": 5, "index": "/admin/userManager", "label": "用户管理", "children": []}, {
    "icon": null,
    "id": 6,
    "index": "/admin/roleManage",
    "label": "角色管理",
    "children": []
  }]
}, {
  "icon": "station",
  "id": 51,
  "index": null,
  "label": "租户信息",
  "children": [{"icon": null, "id": 52, "index": "/account/tenantList", "label": "租户列表", "children": []}]
}, {
  "icon": "payment",
  "id": 53,
  "index": null,
  "label": "支付管理",
  "children": [{
    "icon": null,
    "id": 117,
    "index": "/payment/payOrderListAdmin",
    "label": "支付查询",
    "children": []
  }, {"icon": null, "id": 118, "index": "/payment/refundOrderAdmin", "label": "退款查询", "children": []}, {
    "icon": null,
    "id": 54,
    "index": "/payment/payList",
    "label": "支付渠道配置",
    "children": []
  }]
}, {
    "icon": "aaa",
    "id": 45435,
    "index": null,
    "label": "rtyrty",
    "children": []
  }]


console.log(sample)
console.log(setDepth(sample))

function setDepth(arr){
  return arr.map(n=>{
    if(n.children.length){
      n.children=setDepth(n.children)
    }
    return {
      ...n,
      depth:getDepth(n)
    }
  })
}

function getDepth(obj) {
  var depth = 0;
  if (obj.children) {
    obj.children.forEach(function (d) {
      var tmpDepth = getDepth(d)
      if (tmpDepth > depth) {
        depth = tmpDepth
      }
    })
  }
  return 1 + depth
}
