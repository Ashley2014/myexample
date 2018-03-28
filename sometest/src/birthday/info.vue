<style lang="scss" scoped>
  .info-wrapper {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-bottom:100rpx;
    .tip-wrapper {
      height: 62rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(180deg, #eaeaea, #f5f5f5);
      font-size: 22rpx;
      color: #b9b8b8;
    }
    .form-wrapper {
      .form-block {
        ~.form-block {
          margin-top: 20rpx;
        }
      }

    }
  }
  .squareImg {
    width:62rpx;
    height:62rpx;
    border-radius: 6rpx;
  }
</style>

<template>
  <view class="info-wrapper">
    <form report-submit="true" bindsubmit="formSubmit">
    <view class="tip-wrapper">上传头像并完善个人信息，让大家更了解你吧~</view>
    <view class="form-wrapper">
      <view class="form-block ">
        <view class="form-item with-arrow space-between" @tap="changeAvatar">
          <view class="label">头像</view>
          <view class="control-view">
            <image class="img" src="{{detail.cover_url}}"></image>
          </view>
        </view>
        <view class="form-item with-arrow space-between" @tap="changeBig_cover">
          <view class="label">主页背景</view>
          <view class="control-view">
            <image wx:if="{{detail.big_cover_url}}" class="img squareImg" src="{{detail.big_cover_url}}"></image>
            <view wx:else class="placeholder">从相册里选择一张</view>
          </view>
        </view>

        <view class="form-item with-arrow space-between" data-c_type="name" @tap="goWrite">
          <view class="label">姓名</view>
          <view class="control-view">
            <view wx:if="{{!formData.name}}" class="placeholder">请填写</view>
            <view class="control-view__text" wx:else>
            {{formData.name}}
            </view>
          </view>
        </view>

        <view class="form-item with-arrow space-between" data-c_type="phone" @tap="goWrite">
          <view class="label">电话</view>
          <view class="control-view">
            <view wx:if="{{!formData.phone}}" class="placeholder">请填写</view>
            <view class="control-view__text" wx:else>
            {{formData.phone}}
            </view>
          </view>
        </view>

        <view class="form-item with-arrow space-between">
          <view class="label">角色</view>
          <picker class="control-picker" mode="selector" bindchange="bindCatePickerChange" value="{{cateIndex}}" range="{{cateArray}}"
                  range-key="name">
            <view class="control-text">
              <view wx:if="{{cateIndex===''}}" class="placeholder">请选择</view>
              <view wx:else>
                {{cateArray[cateIndex].name}}
              </view>
            </view>
          </picker>
        </view>



        <view class="form-item with-arrow space-between" data-c_type="company" @tap="goWriteTag">
          <view class="label">公司名称</view>
          <view class="control-view">
            <view wx:if="{{!formData.company}}" class="placeholder">请填写</view>
            <view class="control-view__text" wx:else>
              {{formData.company}}
            </view>
          </view>
        </view>



        <view class="form-item with-arrow space-between">
          <view class="label">地区</view>
          <picker class="control-picker" mode="multiSelector" bindchange="bindRegionPickerChange" bindcolumnchange="bindRegionPickerColumnChange"
            value="{{regionIndex}}" range="{{regionArray}}" range-key="name">
            <view class="control-text">
              <view wx:if="{{regionIndex[0]===''||regionIndex[1]===''}}" class="placeholder">请选择</view>
              <view wx:else>
                {{regionArray[0][regionIndex[0]].name}} {{regionArray[1][regionIndex[1]].name}}
              </view>
            </view>
          </picker>
        </view>
        <view class="form-item with-arrow space-between" data-c_type="desc" @tap="goWrite">
          <view class="label">个人简介</view>
            <view class="control-view">
              <view wx:if="{{!formData.desc}}" class="placeholder">请填写</view>
              <view class="control-view__text" wx:else>
              {{formData.desc}}
              </view>
          </view>
        </view>
        <view class="form-item with-arrow space-between">
          <view class="label">年龄</view>
          <picker mode="date" value="{{birthday}}" class="control-picker" start="{{start_data}}" end="{{end_data}}" bindchange="bindDateChange">
            <view class="control-text">
              <view wx:if="{{!detail.age}}" class="placeholder">请选择</view>
              <view wx:else>
                {{age}}岁
              </view>
            </view>
          </picker>
        </view>
        <!--<view class="form-item with-arrow space-between">-->
          <!--<view class="label">身高</view>-->
          <!--<picker class="control-picker" mode="selector" bindchange="bindHeightPickerChange" value="{{heightIndex}}" range="{{heightArray}}">-->
            <!--<view class="control-text">-->
              <!--<view wx:if="{{heightIndex===-1}}" class="placeholder">请选择</view>-->
              <!--<view wx:else>-->
                <!--{{heightArray[heightIndex]}}cm-->
              <!--</view>-->
            <!--</view>-->
          <!--</picker>-->
        <!--</view>-->
        <!--<view class="form-item with-arrow space-between">-->
          <!--<view class="label">体重</view>-->
          <!--<picker class="control-picker" mode="selector" bindchange="bindWeightPickerChange" value="{{weightIndex}}" range="{{weightArray}}">-->
            <!--<view class="control-text">-->
              <!--<view wx:if="{{weightIndex===-1}}" class="placeholder">请选择</view>-->
              <!--<view wx:else>-->
                <!--{{weightArray[weightIndex]}}kg-->
              <!--</view>-->
            <!--</view>-->
          <!--</picker>-->
        <!--</view>-->
        <view class="form-item with-arrow space-between">
          <view class="label">服务价格</view>
          <picker class="control-picker" mode="selector" bindchange="bindPricePickerChange" value="{{priceIndex}}" range="{{priceArray}}">
            <view class="control-text">
              <view wx:if="{{priceIndex===-1}}" class="placeholder">请选择</view>
              <view wx:else>
                {{priceArray[priceIndex]}}元
              </view>
            </view>
          </picker>
        </view>
        <view class="form-item with-arrow space-between" data-c_type="tag" @tap="goWriteTag">
          <view class="label">服务特色</view>
          <view class="control-view">
            <view wx:if="{{!formData.tag}}" class="placeholder">请填写</view>
            <view class="control-view__text" wx:else>
              {{formData.tag}}
            </view>
          </view>
        </view>
      </view>


      <view class="form-block ">
        <view class="form-item with-arrow space-between" data-c_type="content" @tap="goWrite">
          <view class="label">从业经历</view>
          <view class="control-view">
            <view wx:if="{{!formData.content}}" class="placeholder">请填写</view>
            <view class="control-view__text" wx:else>
              {{formData.content}}
            </view>
          </view>
        </view>
        <view class="form-item with-arrow space-between" data-c_type="service_content" @tap="goWrite">
          <view class="label">服务内容</view>
          <view class="control-view">
            <view wx:if="{{!formData.service_content}}" class="placeholder">请填写</view>
            <view class="control-view__text" wx:else>
              {{formData.service_content}}
            </view>
          </view>
        </view>
      </view>
    </view>

    <!--<view class="bottom-fixed-bt" @tap="formSubmit">保存</view>-->
      <button class="bottom-fixed-bt" form-type="submit">保存</button>

    </form>
  </view>
</template>

<script>
  import wepy from 'wepy';
  import mixin from '../../mixins/index';

  const now = new Date();
  const nowYYYY = now.getFullYear();
  const nowMM = now.getMonth() + 1 > 10 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
  const nowDD = now.getDate();

  //  let start=new Date(now.getTime()-100*365*24*60*60*1000)
  //  let start_data=`${start.getFullYear()}-${start.getMonth()+1>10?start.getMonth()+1:`0${start.getMonth()+1}`}-${start.getDate()}`;
  const end_data = `${nowYYYY}-${nowMM}-${nowDD}`;
  const start_data = `${nowYYYY - 120}-${nowMM}-${nowDD}`;
  //  console.log(start_data,end_data)

  //  start_data='1918-01-01'
  //  end_data='2018-01-01'
  const heightArray = Array.from(new Array(90), (x, i) => i + 146);
  heightArray.unshift('145以下');
  heightArray.push('236以上');
  const weightArray = Array.from(new Array(50), (x, i) => i + 46);
  weightArray.unshift('45以下');
  weightArray.push('96以上');
  const priceArray = [
    '1000以下',
    '1000~2000',
    '2000~5000',
    '5000~10000',
    '10000以上',
  ];


  export default class Index extends wepy.page {
    config = {
      navigationBarTitleText: '个人设置',
    };
    mixins = [mixin];
    data = {
      detail: {},
      regionArray: [[], []],
      regionIndex: ['', ''],
      start_data,
      end_data,
      birthday: '',
      age: '',
      heightIndex: -1,
      heightArray,
      weightIndex: -1,
      weightArray,
      priceIndex: -1,
      priceArray,
      formData: {
        cover: '',
        big_cover: '',
        province: '',
        city: '',
        region_name: '',
        age: '',
        height: '',
        weight: '',
        tag: '',
        content: '',
        service_content: '',
        desc: '',
        name:'',
        phone:'',
        cate:'',
        company:''
      },
      cateArray: [],
      cateIndex: '',
    };
    methods = {

      bindCatePickerChange(e) {
        //        console.log(e.detail)
        let { value } = e.detail;
        this.cateIndex = value;
        this.formData = {
          ...this.formData,
          cate: this.cateArray[value].id,
      };
      },

      async goDetail() {
        wx.navigateTo({
          url: `/pages/user_detail/user_detail?id=${wx.getStorageSync('user').id}`,
        });
      },
      async goWrite(e) {
        const { c_type } = e.currentTarget.dataset;
        console.log('goWrite', c_type)
        wx.navigateTo({
          url: `/pages/my/textarea?type=${c_type}`,
        });
      },
      async goWriteTag(e) {
        const { c_type } = e.currentTarget.dataset;
        wx.navigateTo({
          url: `/pages/my/textarea?type=${c_type}`,
        });
      },
      bindPricePickerChange(e) {
        const { value } = e.detail;
        this.priceIndex = Number(value);
        this.formData = {
          ...this.formData,
          price: this.priceArray[this.priceIndex],
        };
      },
      bindHeightPickerChange(e) {
        const { value } = e.detail;
        this.heightIndex = Number(value);
        this.formData = {
          ...this.formData,
          height: this.heightArray[this.heightIndex],
        };
      },
      bindWeightPickerChange(e) {
        const { value } = e.detail;
        this.weightIndex = Number(value);
        this.formData = {
          ...this.formData,
          weight: this.weightArray[this.weightIndex],
        };
      },
      async changeAvatar() {
        const res = await this.uploadSingleFile();
        const { base_url, path } = res;
        this.formData.cover = path;
        this.detail.cover_url = `${base_url}${path}-w300`;
        this.$apply();
      },
      async changeBig_cover() {
        const res = await this.uploadSingleFile();
        const { base_url, path } = res;
        this.formData.big_cover = path;
        this.detail.big_cover_url = `${base_url}${path}-w300`;
        this.$apply();
      },
      async bindRegionPickerColumnChange(e) {
        const { column, value } = e.detail;
        if (column === 0) {
          const regionRes = await this.getRegion(this.regionArray[0][value].code);
          this.regionArray[1] = regionRes;
          this.regionIndex[1] = '';
          this.$apply();
        } else if (column === 1) {

        }
      },
      bindRegionPickerChange(e) {
        const { value } = e.detail;
        const province = this.regionArray[0][value[0]];
        const city = this.regionArray[1][value[1]];
        this.regionIndex = value;
        this.formData = {
          ...this.formData,
          province: province.code,
          city: city.code,
          region_name: `${province.name} ${city.name}`,
        };
      },

      bindDateChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.birthday = e.detail.value;
        const timestamp = new Date(this.birthday.replace(/-/g, '/')).getTime();
        this.detail.age = timestamp / 1000;
        this.formData = {
          ...this.formData,
          age: timestamp / 1000,
        };
        this.age = getAge(timestamp);
      },
      async formSubmit(e) {
        console.info(11,e)

        const formData = {
          ...this.formData,
          tag: this.formData.tag.replace(/，/g, ','),
        };
        const res = await this.fetch({
          url: `/api/artisan/user/${wx.getStorageSync('user').id}`,
          data: formData,
          method: 'PUT',
        });
        this.showToast(res.info);
        wx.navigateBack();

        await this.getFormId(e.detail.formId)

        this.$apply();
      },
    };
    computed = {

    };
    components = {};
    onShow() {
      this.formData.service_content = this.$root.$parent.globalData.tmpFormData.service_content;
      this.formData.content = this.$root.$parent.globalData.tmpFormData.content;
      this.formData.desc = this.$root.$parent.globalData.tmpFormData.desc;
      this.formData.tag = this.$root.$parent.globalData.tmpFormData.tag;
      this.formData.name = this.$root.$parent.globalData.tmpFormData.name;
      this.formData.phone = this.$root.$parent.globalData.tmpFormData.phone;
      this.formData.company = this.$root.$parent.globalData.tmpFormData.company;
    }
    async onLoad() {
      const detailRes = await this.fetch({
        url: `/api/artisan/user/${wx.getStorageSync('user').id}`,
      });

      let cateP = await this.fetch({
        url: '/api/artisan/cate',
      });
      let cateRes = await cateP;
      this.cateArray = cateRes.data.list;


      this.detail = detailRes.data;
      this.detail.age = Number(this.detail.age);
      this.age = getAge(this.detail.age * 1000);
      this.birthday = getDateStr(this.detail.age * 1000);

      const regionRes = await this.getRegion();
      this.regionArray[0] = regionRes;
      this.regionIndex[0] = this.regionArray[0].findIndex(n => n.code == this.detail.province);


      const regionRes2 = await this.getRegion(regionRes[0].code);
      this.regionArray[1] = regionRes2;
      this.regionIndex[1] = this.regionArray[1].findIndex(n => n.code == this.detail.city);

      this.heightIndex = this.heightArray.findIndex(n => n == this.detail.height);
      this.weightIndex = this.weightArray.findIndex(n => n == this.detail.weight);
      this.priceIndex = this.priceArray.findIndex(n => n == this.detail.price);

//      this.cateIndex = this.cateArray.findIndex(n => n == this.detail.cate_id);

      this.cateArray.forEach((n,i)=>{
        if(n.id === this.detail.cate_id){
          this.cateIndex = i
        }
      })


//      console.info(this.cateIndex,this.cateArray,this.detail.cate_id)



    this.$root.$parent.globalData.tmpFormData = {
        ...this.$root.$parent.globalData.tmpFormData,
        service_content: this.detail.service_content,
        content: this.detail.content,
        tag: this.detail.tag,
        desc: this.detail.desc,
        name: this.detail.name,
        phone: this.detail.phone,
        company: this.detail.company,
      };


      this.formData = {
        ...this.formData,
        cover: this.detail.cover,
        big_cover: this.detail.big_cover,
        province: this.detail.province,
        city: this.detail.city,
        region_name: this.detail.region_name,
        age: this.detail.age,
        height: this.detail.height,
        weight: this.detail.weight,
        price: this.detail.price,
        tag: this.detail.tag,
        content: this.detail.content,
        service_content: this.detail.service_content,
        desc: this.detail.desc,
        name: this.detail.name,
        phone: this.detail.phone,
        cate: this.detail.cate_id,
        company: this.detail.company
      };


      this.$apply();
    }
  }

  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function getDateStr(timestamp) {
    const now = new Date(timestamp);
    const nowYYYY = now.getFullYear();
    const nowMM = now.getMonth() + 1 > 10 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
    const nowDD = now.getDate();
    const end_data = `${nowYYYY}-${nowMM}-${nowDD}`;
    return end_data;
  }
</script>
