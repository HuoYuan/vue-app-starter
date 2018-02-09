<template>
  <div class="container">

    <main class="branchs">
      <ul class="node-wrapper">
        <mt-cell-swipe
          class="node"
          v-for="(researcher, index) in staging"
          :key="index"
          :title="`${researcher.industry} ${ researcher.name } ${ researcher.mobile }`"
          :right="[
            {
              content: '移除',
              style: { background: '#ff4937', color: '#fff', width: '62px', textAlign: 'center'  },
              handler: () => remove({ researcher })
            }
          ]"></mt-cell-swipe>
      </ul>
    </main>

    <div class="footer">
      <div class="info-wrap">
        <span>
          已选择 · {{ staging.length }}</i>
        </span>
      </div>
      <div class="confirm-wrap">
        <button
          type="button"
          class="global--button-primary confirm"
          @click="submit">
            确认
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { CellSwipe } from 'mint-ui'
import { writeCustomField } from '@/utils'

export default {
  name: 'meetingClientForMobile',

  components: {
    'mt-cell-swipe': CellSwipe
  },

  data() {
    return {
      keyword: '',
      searching: false,
      contacter: {
        name: '',
        company: '',
        sht: '',
        mobile: '',
        type: 'write'
      }
    }
  },

  computed: {
    ...mapGetters('researcher', [
      'staging'
    ])
  },

  watch: {
    keyword(val) {
      this.find({
        keyword: val
      })
    }
  },

  mounted() {
    document.title = '已选择的参会客户'
  },

  methods: {

    ...mapActions('researcher', [
      'remove'
    ]),

    write() {
      const { $set, add, contacter } = this
      const { name, sht, mobile } = contacter
      if (!(name && sht && mobile)) {
        return
      }
      add({ contacter })
      $set(this, 'contacter', {
        name: '',
        company: '',
        sht: '',
        mobile: ''
      })
    },

    submit() {
      const { _customfieldId } = this.$route.query
      const { staging } = this
      const result = staging.map(item => `${item.industry}-${item.name}-${item.mobile}`).join(';')

      writeCustomField({
        _customfieldId,
        values: [result]
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/colors.less';
@import '~@/styles/checkbox.less';

.container {
  height: 100%;
  width: 100%;
  position: relative;
  background: #f5f5f5;

  .search-bar {
    position: relative;
    display: flex;
    box-sizing: border-box;
    height: 52px;
    background-color: #fff;

    .search-bar-box {
      position: relative;
      padding-left: 30px;
      padding-right: 30px;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      z-index: 1;

      .icon-icon-search {
        position: absolute;
        left: 17px;
        top: 0;
        line-height: 52px;
        color: #a6a6a6;
        font-size: 19px;
      }

      .searct-bar-input {
        width: 100%;
        height: 52px;
        border: 0;
        font-size: 14px;
        line-height: 52px;
        padding: 0 16px;
        box-sizing: content-box;
        background: #fff;
        box-shadow: 0 0.5px 0 0 @borderGray;
      }
    }
  }

  .branchs {
    width: 100%;
    height: e("calc(100% - 112px)");
    overflow-y: auto;
    .node-wrapper {
      background: #fff;
      box-shadow: 0 0.5px 0 0 @borderGray;
      line-height: 48px;
      padding-left: 15px;
      font-size: 14px;
      color: #383838;
      max-height: 100%;
      overflow-y: auto;
      .node {
        height: 48px;
        display: flex;
        align-items: center;
      }
    }
  }

  .body {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-icon-search {
        font-size: 65px;
        color: #c6c6c6;
      }
      .title {
        margin-top: 28px;
        width: 190px;
        height: 16px;
        font-size: 16px;
        letter-spacing: -0.2px;
        text-align: center;
        color: #a6a6a6;
      }
      .subtitle {
        width: 154px;
        height: 13px;
        margin-top: 12px;
        font-size: 13px;
        letter-spacing: -0.2px;
        text-align: center;
        color: #a6a6a6;
      }
    }
  }
  
  .footer {
    width: 100%;
    height: 112px;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    .info-wrap {
      font-size: 14px;
      height: 48px;
      line-height: 48px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 17px;
      border-top: 1px solid @borderGray;
      color: #a6a6a6;
    }
    .confirm-wrap {
      height: 64px;
      line-height: 64px;
      background: #fff;
      display: flex;
      padding: 12px 15px;
      border-top: 1px solid @borderGray;
      .confirm {
        flex: 1;
        text-align: center;
        height: 40px;
        border-radius: 4px;
        line-height: 40px;
        color: #fff;
      }
    }    
  }
}
</style>
