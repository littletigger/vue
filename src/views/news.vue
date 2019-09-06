<template>
  <div>
     
     <van-nav-bar title="资讯"  left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
<van-search placeholder="请输入搜索关键词" v-model="value" />
<van-grid :column-num="3" clickable>
  <van-grid-item  
  >
  <van-icon name="browsing-history" size="30px" color="#FF7256"/>
  <p>新闻回顾</p>
  </van-grid-item>
   <van-grid-item  
  >
  <van-icon name="gold-coin" size="30px" color="#8B2323"/>
  <p>中间价</p>
  </van-grid-item>
   <van-grid-item  
  >
  <van-icon name="volume" size="30px" color="#ADFF2F"/>
  <p>法律公告</p>
  </van-grid-item>
  
  
 
</van-grid>
<p style="text-align: left;padding-left: 20px;font-size:15px;color:red;">今日热点新闻</p>
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  
  <p  style="text-align: left;padding-left: 21px;font-size:10px;">
    外汇局出实招支持先行示范区建设 深圳开展资本项目外汇收入支付便利化试点
    </p>
    <p style="text-align: left;padding-left: 21px;font-size:5px;"><van-tag type="success">深圳中心支行</van-tag>&nbsp;&nbsp;&nbsp;2019-08-30 15:02:42</p>
<van-divider></van-divider>
    <p  style="text-align: left;padding-left: 21px;font-size:10px;">
    2019年8月30日中国外汇交易中心受权公布人民币汇率中间价公告
    </p>
    <p style="text-align: left;padding-left: 21px;font-size:5px;"><van-tag type="success">货币政策司</van-tag>&nbsp;&nbsp;&nbsp;2019-08-30 09:25:21</p>
    <van-divider></van-divider>
    <p  style="text-align: left;padding-left: 21px;font-size:10px;">
  2019年“金融知识普及月”宣传之外汇知识篇
    </p>
    <p style="text-align: left;padding-left: 21px;font-size:5px;"><van-tag type="success">南京分行</van-tag>&nbsp;&nbsp;&nbsp;2019-08-29 16:57:28</p>
    <van-divider></van-divider>
    <p  style="text-align: left;padding-left: 21px;font-size:10px;">
    中国外汇交易中心受权公布人民币汇率中间价公告
    </p>
    <p style="text-align: left;padding-left: 21px;font-size:5px;"><van-tag type="success">中国外汇中心</van-tag>&nbsp;&nbsp;&nbsp;2019/9/4</p>
    
</van-list>
  </div>

</template>

<script>

export default {
  data(){
    return{
       list: [

       ],
      loading: false,
      finished: true
     
    }
  },
  methods: {
      onLoad() {
      // 异步更新数据
      setTimeout(() => {
        
        // 加载状态结束
        this.loading = false;

      }, 500);
    }
   
}
      
};
</script>

<style lang="less">

</style>