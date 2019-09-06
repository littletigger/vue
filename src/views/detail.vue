<template>
  <div>
<van-image
  width="100%"
  height="5rem"
  fit="contain"
  :src="avatar"
/>
<van-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
  :scrollable="true"
>
  招商银行限时特惠--2月权益特典
</van-notice-bar>
<van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">汇率</van-divider>
<p>100美元=700RMB</p>
<van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"></van-divider>
<van-grid :column-num="3" clickable>
  <van-grid-item
    icon="bookmark-o"
    text="简介"
    @click="onClick"
  />
  <van-grid-item
    icon="orders-o"
    text="产品特点"
  />
  <van-grid-item
    icon="notes-o"
    text="办理流程"
  />
  <van-grid-item
    icon="phone-o"
    text="人工服务"
  />
  <van-grid-item
    icon="flower-o"
    text="温馨提示"
  />
  <van-grid-item
    icon="location-o"
    text="地理位置"
  />
</van-grid>
<van-dialog
  v-model="show"
  title="简介"
  show-cancel-button
>
 <div style="font-size:10px;"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;招商银行诞生以来，开创了中国银行业的数十个第一：创新推出了具有里程碑意义的、境内第一个基于客户号管理的借记卡——“一卡通”；首个真正意义上的网上银行——“一网通”，第一张国际标准双币信用卡；首个面向高端客户的理财产品——“金葵花理财”；率先推出银行业首个智能投顾产品——“摩羯智投”，目前规模已超百亿，开创了中国财富管理领域“人与机器”、“线上线下”的融合服务新模式；并在境内银行业率先推出了离岸业务、买方信贷、国内信用证业务、企业年金业务、现金管理业务、银关通业务、公司理财与网上承兑汇票业务等。</span></div>
</van-dialog>

<div style="margin-top:40px;"><van-button round type="danger">申请预约</van-button></div>
  </div>

</template>

<script>

export default {
  data(){
    return{
      avatar: require('@/assets/zs.png'),
      show: false
    }
  },
  methods: {
   onClick() {
 
       this.show = !this.show;
}   
}
  
   
  
};
</script>

<style lang="less">

</style>