<template>
  <div>
    
     <van-nav-bar title="我的"  left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
   <div :style="bgImg">
  <van-image
  round
  width="8rem"
  height="8rem"
  :src="avatar"
/>
<p style="color:white;"><a href="/asdf" style="color:white;">未登录/注册</a></p>
  </div> 
    

    <van-cell-group class="user-group">
      <van-cell icon="friends-o" title="个人中心" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="like-o" title="我的收藏" is-link />
      <van-cell icon="clock-o" title="我的预约" is-link />
      <van-cell icon="phone-o" title="关于我们" is-link />
    </van-cell-group>
  </div>
</template>

<script>

export default {
   data() {
        return {
            bgImg: {
                backgroundImage: "url(" + require("../assets/bg.jpg") + ")",
                backgroundRepeat: "no-repeat",
               
          },
           avatar: require('@/assets/dl.jpg')
           
     }
 }
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>