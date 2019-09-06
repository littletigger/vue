<template>
  <div id="app">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
   
 
    <router-view />
   <van-tabbar route>
   <van-tabbar-item
    replace
    to="/about"
    icon="home-o"
  >
    外币兑换
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/news"
    icon="search"
  >
   资迅
  </van-tabbar-item>
   <van-tabbar-item
    replace
    to="/home"
    icon="friends-o"
  >
    我的
  </van-tabbar-item>
</van-tabbar>
   
 </van-pull-refresh>
  </div>
  
</template>

<script>
import { location } from "./location";
export default {
  name: 'app',
  components: {
    
  },
  data(){
        return{
           province :"正在定位" ,   //给渲染层定义一个初始值
            count: 0,
           isLoading: false
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
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
},
 mounted() {
    this.getLocation(); // 调用获取地理位置
}

 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
