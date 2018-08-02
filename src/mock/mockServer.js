import Mock from 'mockjs'
import data from './msite.json'
import shiwu from './shiwu.json'
import category from './category.json'
import login from './login.json'
import pref from './pref.json'

Mock.mock('/category',{code:0,data:category});


//分类
Mock.mock('/headCateList',{code:0,data:data.headCateList});
//轮播图
Mock.mock('/focusList',{code:0,data:data.focusList});
//特征
Mock.mock('/policyDescList',{code:0,data:data.policyDescList});
//品牌制造商
Mock.mock('/tagList',{code:0,data:data.tagList});
//新品首发
Mock.mock('/newItemList',{code:0,data:data.newItemList});
//人气推荐，好品精选
Mock.mock('/popularItemList',{code:0,data:data.popularItemList});
//限时购
Mock.mock('/flashSaleIndexVO',{code:0,data:data.flashSaleIndexVO});
//专题精选
Mock.mock('/topicList',{code:0,data:data.topicList});
//分类列表
Mock.mock('/cateList',{code:0,data:data.cateList});


//轮播
Mock.mock('/banner',{code:0,data:shiwu.banner});
//小轮播
Mock.mock('/column',{code:0,data:shiwu.column});
//白衣少年推荐
Mock.mock('/recommend',{code:0,data:shiwu.recommend});

//十点一刻
Mock.mock('/tenfifteen',{code:0,data:shiwu.tenfifteen});
//严选正品
Mock.mock('/zhenpin',{code:0,data:shiwu.zhenpin});
//严选look
Mock.mock('/yxLook',{code:0,data:shiwu.yxLook});
//更多精彩
Mock.mock('/findMore',{code:0,data:shiwu.findMore});

//验证码
Mock.mock('/sendcode',{code:0,data:login});

Mock.mock('/pref',{code:0,data:pref});



