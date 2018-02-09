<template>
  <div class="container">

    <h3>Page A - mobile</h3>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { ShortInput, BeforeQuery, NoResult, Loading } from '@zhinan/tb-components'

export default {
  name: 'researcher',

  components: {
    BeforeQuery,
    NoResult,
    Loading,
    ShortInput
  },

  data() {
    return {
      searching: false
    }
  },

  computed: {
    ...mapGetters('researcher', [
      'keyword',
      'all',
      'staging'
    ])
  },

  mounted() {
    document.title = '研究员'

    this.find()
  },

  methods: {
    ...mapActions('example', [
      'find'
    ]),

    ...mapMutations('example', [
      'ADD_STAGING'
    ]),

    search(event) {
      this.find({
        keyword: event.target.value
      })
    },
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/container.less';
@import '~@/styles/colors.less';
@import '~@/styles/checkbox.less';

.my-mixin-button {
  font-size: 14px;
	font-weight: 500;
  height: 24px;
  line-height: 24px;
  margin: auto 0;
}

.my-mixin-node {
  display: flex;
  line-height: 40px;
  height: 40px;
  justify-content: space-between;
  padding: 0 28px;
  color: #808080;
  > .add, .remove {
    cursor: pointer;
  }
  &:hover {
    background: #f2f2f2;
  }
  > .add:hover {
    color: @textBlue;
  }
  > .remove:hover {
    color: #ff4937;
  }
}

.my-mixin-node:first-child {
  border-top: 1px solid #E5E5E5;
}

.my-mixin-contact {
  display: flex;
  align-items: center;
  margin: auto 0;
  color: #808080;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 40px;
  height: 40px;
}

.my-mixin-action {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.main {
  font-size: 14px;
  display: flex;
  background: #e7e7e7;
  height: e('calc(100% - 1px)');
  > .left {
    background: #fff;
    width: 350px;
    height: 100%;
    padding-top: 24px;
    border-right: 1px solid #E5E5E5;
    display: flex;
    flex-direction: column;
    > .search {
      height: 40px;
      line-height: 40px;
      background: url(~@/assets/images/icon-search.svg);
      background-position: 13px 8px;
      background-repeat: no-repeat;
      border: 1px solid #E5E5E5;
      padding: 10px 35px 10px 40px;
      margin: 0 28px;
    }
    > .tree {
      height: 451px;
      width: 100%;
      overflow-y: auto;
      font-size: 14px;
      line-height: 1.14;
      text-align: left;
      color: #808080;
      .info {
        .my-mixin-action();
      }
      > .branchs {
        > .branch-wrapper {
          display: flex;
          flex-direction: column;
          > .branch {
            display: flex;
            line-height: 36px;
            height: 36px;
            margin: 12px 28px 0;
            justify-content: space-between;
            font-weight: 500;
            color: #a6a6a6;
            .company {
              display: flex;
              align-items: center;
              white-space: nowrap;
            }
          }
          > .node-wrapper {
            display: flex;
            flex-direction: column;
            > .node {
              .my-mixin-node();
              > .contact {
                width: 220px;
                .my-mixin-contact();
              }
              > .add {
                .my-mixin-button();
                .my-mixin-action();
                display: none;
              }
              &:hover > .add {
                display: block;
              }
            }
          }
        }
      }
    }
  }
  > .right {
    background: #fff;
    width: e('calc(100% - 351px)');
    height: 100%;
    > .title {
      margin-top: 28px;
      height: 36px;
      font-size: 16px;
      font-weight: 500;
      padding: 0 20px;
      font-size: 16px;
      text-align: left;
      color: #383838;
    }
    > .node-wrapper {
      height: 418px;
      overflow-y: auto;
      > .node {
        .my-mixin-node();
        > .contact {
          .my-mixin-contact();
          width: 140px;
        }
        > .remove {
          .my-mixin-button();
          .my-mixin-action();
          display: none;
        }
        &:hover > .remove {
          display: block;
        }
      }
    }
    > .bottom-bar {
      display: flex;
      justify-content: space-between;
      line-height: 57px;
      height: 57px;
      padding: 8.5px 16px;
      border-top: 1px solid #E5E5E5;
      > .add {
        color: @textBlue;
        line-height: 40px;
        height: 40px;
        cursor: pointer;
      }
      > .confirm {
        width: 96px;
        line-height: 40px;
        height: 40px;
      }
    }
  }
}

.loading-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popover-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 216px;
  line-height: 52px;
  height: 52px;
  border-bottom: 1px solid #ccc;
  > .title {
    font-size: 15px;
    font-weight: 600;
    color: #383838;
    margin: 0;
  }
}

.popover-item {
  margin-top: 16px;
}

.add-confirm {
  width: 216px;
  height: 40px;
}

.check--label-box {
  border-color: #ccc;
}

.check--label {
  margin-right: 9px;
  display: inline-block;
}

.checked {
  border-color: @textBlue;
  background: @textBlue;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: 3px;
    width: 4px;
    height: 6px;
    border: solid #fff;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
}
</style>
