<template>

  <div class="about">
    
     <van-nav-bar :title="province"  left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image"  width="100%" height="200px"/>
  </van-swipe-item>
</van-swipe>
   <van-field
  readonly
  clickable
  label="原始货币"
  :value="value"
  placeholder="选择货币类型"
  @click="showPicker = true"
/>
<span>——></span>
 <van-field
  readonly
  clickable
  label="目标货币"
  :value="value"
  placeholder="选择货币类型"
  @click="showPicker = true"
/>

<van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>

<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
<van-index-bar>
  <van-index-anchor index="A" />
  <ul>
    <li>
      <van-row gutter="5">
  <van-col span="8"><van-image
  width="3rem"
  height="3rem"
  fit="contain"
  :src="avatar"
/></van-col>
  <van-col span="8"><span style="display:block;margin-left: -15px;margin-bottom: 17px;">中国招商银行</span><span style="display:block;margin-left: -15px;font-size: smaller;">1美元=7.0人名币</span>
  </van-col>
  <van-col span="8"><div style="margin-top:6px;"><van-button type="primary"  size="small" color="#6495ED" to="/detail">现金兑换预约</van-button></div></van-col>
</van-row>
<van-divider />
    </li>
    <li>
      <van-row gutter="5">
  <van-col span="8"><van-image
  width="3rem"
  height="3rem"
  fit="contain"
  :src="avatart"
/></van-col>
  <van-col span="8"><span style="display:block;margin-left: -15px;margin-bottom: 17px;">中国民生银行</span><span style="display:block;margin-left: -15px;font-size: smaller;">1美元=7.1人名币</span>
  </van-col>
  <van-col span="8"><div style="margin-top:6px;"><van-button type="primary"  size="small" color="#6495ED" to="/detail">现金兑换预约</van-button></div></van-col>
</van-row>
<van-divider />
    </li>
    <van-divider />
  </ul>
  <van-divider />
  
</van-index-bar>
  </div>
</template>
<script>
import { location } from "../location";

export default {
  data() {
    return {
       province :"正在定位" ,   //给渲染层定义一个初始值
            count: 0,
           isLoading: false,
      images: [
         require('@/assets/1.jpg'),
          require('@/assets/2.jpg'),
      
      ],
       value1: 0,
      value2: 'a',
      option1: [
       { text: '筛选条件', value: 3},
        { text: '最简手续', value: 1 },
         { text: '最短周期', value: 0 },
          { text: '最近距离', value: 'a' },
          { text: '最优汇率', value: 'b' }

      ],
      option2: [
        { text: '智能匹配', value: 'c' },
        { text: '最近距离', value: 'a' },
        { text: '最优汇率', value: 'b' }
      ],
      value: '',
      showPicker: false,
      avatar: require('@/assets/zhaoshang.png'),
      avatart: require('@/assets/mingsheng.png'),
      columns: ['人名币', '美元', '日元', '泰铢', '欧元'],
      order:[{'name':"A"},{'name':"B"},{'name':"C"},{'name':"D"}]
    }
  },
  methods: {
      /**获取地图定位*/
    getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
        _that.lat = result.position.lat;
        _that.lng = result.position.lng;
        _that.province = result.addressComponent.province;
        _that.city = result.addressComponent.city;
        _that.district = result.addressComponent.district;
      });
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  },
  computed:{
   
  }
};
</script>