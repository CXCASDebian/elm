<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="city_val" type="text" placeholder="输入城市名">
      </div>
      <button @click="$router.push({name:'address', params:{city: city}})">取消</button>
    </div>
    <div style="height: 100%" v-if="!searchList.length">
      <div class="location">
        <Location @click="selectCity(city)" :address="cityName" />
      </div>
      <Alphabet ref="allcity" :cityInfo="cityInfo" :keys="keys" @changeLocation="locationGetter" @selectCity="selectCity"/>
    </div>
    <div class="search_list" v-else>
        <ul>
          <li
            v-for="(item,index) in searchList"
            :key="index"
            @click="selectCity"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import Location from "../components/Location";
import Alphabet from "../components/Alphabet";
export default {
  name: "City",
  data() {
   return {
     city_val : '',
     cityInfo: null,
     keys: [],
     cityName: '武汉',
     allCities: [],
     searchList: []
   }
  },
  created() {
    this.getCityInfo();
  },
  computed: {
    city: {
      get(){
          return '武汉' 
      },
      set(v) {
        return v
      }
      // return (
      //   this.$store.getters.location.addressComponent.city ||
      //   this.$store.getters.location.addressComponent.province
      // );
    }
  },
  watch: {
    city_val () {
      // 以下6行为自制 searchCity
      // this.allCities.forEach(item => {
      //   if(item.indexOf(this.city_val) == 0){
      //     this.searchList.push(item);
      //   }
      // })
      // console.log(this.searchList,'test');
      this.searchCity()
    }
  },
  methods: {
    getCityInfo() {
      console.log(1);
      this.$axios("/api/posts/cities").then((res) => {
        this.cityInfo = res.data;
        this.keys= Object.keys(res.data);
        this.keys.pop();
        this.keys.sort();
        this.$nextTick(() => {
          this.$refs.allcity.initScroll();
        });
        // 存储所有城市拥于搜索过滤
        this.keys.forEach( key => {
          //console.log(this.cityInfo[key]);
          this.cityInfo[key].forEach(item => {
            //console.log(item.name);
            this.allCities.push(item)
          })
        })
        // console.log(this.allCities);
      })
      .catch(err => {
        console.log(err);
      })
    },
    locationGetter (cityName) {
      this.cityName = cityName
      console.log(this.cityName);
    },
    selectCity (city) {
      console.log(city.name);
      this.$router.push({name:'address', params: { city: city}})
    },
    searchCity () {
      if(!this.city_val){
        this.searchList = [];
      }else {
        this.searchList = this.allCities.filter(item => {
          return (item.name.indexOf(this.city_val) !== -1);
        })
        console.log(this.searchList);
      }
    }
  },
  components: {
    Location,
    Alphabet
  }
};
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
