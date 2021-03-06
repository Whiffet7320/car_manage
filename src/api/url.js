export default {
    // 线上地址 http://car_admin.5laoye.com/ 账号和密码都是admin
    // 如师傅
    // baseUrl:'http://192.168.50.96:8001',
    baseUrl: 'https://dev.cars.hxqhhhh.shop',
    login: '/admin/login', //登录
    users: '/admin/users', //用户列表
    items:'/admin/items',//商品列表
    categories: '/admin/categories', //分类列表
    scoreItems:'/admin/score-items',//积分商品列表
    postage:'/admin/postage',//运费模板
    area:'/api/area',//获取省市县数据
    scoreItemSku:'/admin/score-item-sku',//新增积分商品列表sku
    orders:'/admin/orders',//订单列表
    chatRooms:'/admin/chat-rooms',//聊天列表
    chatHistory:'/admin/chat-history',//聊天历史记录
    afterSale:'/admin/after-sale',//售后单列表
    scoreRule:'/admin/score-rule',//积分规则修改
    billRule:'/admin/bill-rule',//发票规则修改
    afterSaleStatus:'/admin/after-sale/status',//售后单更改状态列表
    search_itemkeyslist:'/admin/search_itemkeyslist',//搜索关键字列表
    search_itemkeys:'/admin/search_itemkeys',//更新关键字名称
    userexamineList:'/admin/userexamine-list',//后台用户审核列表
    userexamine:'/admin/userexamine',//审核操作
    supplier:'/admin/supplier',//供应商列表
    supplierIdOelist:'/admin/supplier',//供应商oe码列表
    statistics:'/admin/statistics',//统计
    itemsSearch_oe:'/admin/items/search_oe',//商品添加--oe码查询
    manage_limit:'/admin/manage_limit',//权限列表
    manage_list:'/admin/manage_list',//账号列表
    manage_add:'/admin/manage_add',//添加账号
    manage_limitview:'/admin/manage_limitview',//获得权限名称
    manage_view:'/admin/manage_view',//账号详情
    usersIdMoneyRecords: '/admin/users', //用户积分列表
    addCategories: '/admin/categories', //新增分类
    updateCategories: '/admin/categories', //修改分类
    uploadToken: '/api/upload/token', //阿里云上传sts
    idCards: '/admin/id-cards', //身份认证
    demandQuotes: '/admin/demand-quotes', //需求单列表
    articles: '/admin/articles', //文章列表
    articlesTypes: '/admin/articles-types', //文章类型
    banners: '/admin/banners', //banner列表
    bannersPositions: '/admin/banners-positions', //banner位置列表
    bannersJumpTypes: '/admin/banners-jump-types', //banner跳转类型
    globalConfigs: '/admin/global-configs', //全局变量
    areas: '/admin/areas', //所有城市分页
    feedbacks: '/admin/feedbacks', //反馈列表
    withdraw: '/admin/withdraw', //提现列表
    fixedPosition: '/admin/fixed-position', //固定位置
    positions: '/admin/positions', //固定位置列表
    fixedPositionItem: '/admin/fixed-position-item', //固定位置商品列表
    itemAll: '/admin/items-all', //全部商品
    turntableItem: '/admin/turntable-item', //奖品列表
    awards: '/admin/awards', //中奖列表
    goodsOrder: '/admin/goods-order', //商品订单列表
    manage_update:'/admin/manage_update',//修改账号
    manage_del:'/admin/manage_del',//删除账号
    item_oelist:'/admin/item_oelist',//商品所属oe码列
    ordersExport:'/admin/orders/export',//订单导出
    brands:'/admin/brands',//品牌列表
    message:'/admin/message',//通知列表
    homeimages:'/admin/homeimages',//滚播图列表
    
    // 模板
    productList: '/admin/product/list', //商品列表
    loginInfo: '/admin/login/info',
    productUpload: '/admin/product/upload', //上传商品图片
    categorySave: '/admin/category/save', //商品分类保存和编辑
    categoryIndex: '/admin/category/index', //商品分类列表
    productSave: '/admin/product/save', //添加商品和编辑
    categoryDel: '/admin/category/del', //商品分类删除
    productAttrs: '/admin/product/attrs', //获取商品规格属性
    productDescription: '/admin/product/description', //获取商品详情
    combinationSave: '/admin/combination/save', //添加拼团商品
    combinationList: '/admin/combination/list', //拼团商品列表
    combinationAttrs: '/admin/combination/attrs', //获取拼团商品规格
    combinationDescription: '/admin/combination/description', //获取拼团商品详情
    combinationShow: '/admin/combination/show', //拼团商品上下架
    productShow: '/admin/product/show', //商品上下架
    activitySave: '/admin/activity/save', //添加卖场活动
    activityIndex: '/admin/activity/index', //卖场活动列表
    activityDel: '/admin/activity/del', //删除卖场活动
    orderIndex: '/admin/order/index', //订单列表
    activityAdd_product: '/admin/activity/add_product', //添加卖场商品
    activityList_product: 'admin/activity/list_product', //活动商品列表
    orderDelivery: '/admin/order/delivery', //订单发货
    activityList_gift: '/admin/activity/list_gift', //拼团有礼主题列表
    activityAdd_gift: '/admin/activity/add_gift', //添加和编辑拼团有礼主题
    activityDel_gift: '/admin/activity/del_gift', //删除拼团有礼主题
    activityDel_cate_gift: '/admin/activity/del_cate_gift', //删除拼团有礼下属分类
    activityAdd_cate_gift: 'admin/activity/add_cate_gift', //添加拼团有礼下属分类
    activityDel_product: 'admin/activity/del_product', //删除卖场活动商品
    uniqidIndex: '/admin/uniqid/index', //靓号列表
    uniqidAdd: '/admin/uniqid/add', //靓号添加
    uniqidDel: '/admin/uniqid/del', //靓号删除
    combinationAdd_product_cate: '/admin/combination/add_product_cate', //商品加入拼拼有礼分类
    combinationList_product_cate: '/admin/combination/list_product_cate', //拼团有礼分类下的商品,
    combinationDel_product_cate: '/admin/combination/del_product_cate', //删除拼拼有礼分类下的商品
    userIndex: '/admin/user/index', //用户列表
    webconfigSave: '/admin/webconfig/save', //配置文件修改
    webconfigIndex: '/admin/webconfig/index', //配置文件列表
    sell_order_list: '/admin/sell_order_list', //寄售列表
    confirm_sell_order: '/admin/confirm_sell_order', //同意寄售
    save_shipping_templates: '/admin/save_shipping_templates', //添加和编辑运费模版
    list_shipping_templates: '/admin/list_shipping_templates', //运费模板列表
    detail_shipping_templates: '/admin/detail_shipping_templates', //查看运费模版详情
    del_shipping_templates: '/admin/del_shipping_templates', //删除运费模板
    dashboard: '/admin/dashboard', //后台首页数据
    user_bill_log: '/admin/user_bill_log', //用户账户变动明细
    template_message_list: '/admin/template_message_list', //消息模版列表
    template_message_save: '/admin/template_message_save', //模板消息编辑
    user_extract: '/admin/user_extract', //用户提现列表
    upload_pic: '/admin/upload_pic', //上传轮播图和开屏页图片
    banner_add: '/admin/banner_add', //轮播图设置
    banner_list: '/admin/banner_list', //轮播图列表
    banner_edit: '/admin/banner_edit', //轮播图编辑
    banner_del: '/admin/banner_del', //轮播图删除
    open_pic_add: '/admin/open_pic_add', //开屏页设置
    open_pic: '/admin/open_pic', //开屏页查看
    open_pic_edit: '/admin/open_pic_edit', //开屏页编辑
    data_center: '/admin/data_center', //数据中心
    other_shipping_templates: '/admin/other_shipping_templates', //无分页的
    orderDel: '/admin/order/del', //订单删除
    updat_user_info: '/admin/updat_user_info', //修改用户信息
    article_list: '/admin/article_list', //文章列表
    article_add: '/admin/article_add', //添加文章
    article_edit: '/admin/article_edit', //编辑文章
    article_del: '/admin/article_del', //删除文章
    user_pintuan_log: '/admin/user_pintuan_log', //拼团记录
    user_pintuan_count: '/admin/user_pintuan_count', //拼团信息统计
}