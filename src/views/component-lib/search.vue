<template>
  <a-card :bordered="false" class="search-form">
    <a-form :autoFormCreate="(form) => {this.form = form;this.form.getFieldDecorator('owner',{initialValue: ['1', '2']})}">
      <form-row label="所属类目">
        <a-form-item>
          <tag-select>
            <tag-select-option :id="item.id" :key="item.id" v-for="item in itemList">{{ item.title }}</tag-select-option>
          </tag-select>
        </a-form-item>
      </form-row>
      <form-row label="owner" style="padding-bottom: 11px">
        <a-form-item fieldDecoratorId="owner" initialValue="['1', '2']">
          <a-select mode="multiple" style="max-width: 286px">
            <a-select-option value="3">我自己</a-select-option>
            <a-select-option value="1">吴家豪</a-select-option>
            <a-select-option value="2">周星星</a-select-option>
            <a-select-option value="4">李宁</a-select-option>
          </a-select>
        </a-form-item>
        <a @click="lookMyself">只看自己的</a>
      </form-row>
      <form-row label="其他选项">
        <a-row>
          <a-col :span="8">
            <a-form-item label="活跃用户" :labelCol="{span: 6}" :wrapperCol="{span: 12}">
              <a-select placeholder="不限">
                <a-select-option value="1">周星星</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="好评度" :labelCol="{span: 6}" :wrapperCol="{span: 12}">
              <a-select placeholder="不限">
                <a-select-option value="1">优秀</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </form-row>
    </a-form>
  </a-card>
</template>

<script>
import TagSelect from '../../components/tool/tag-select'
import FormRow from '../../components/form/form-row'

const TagSelectOption = TagSelect.Option

const itemList = [
  {
    id: 0,
    name: 'all',
    title: '这是一个内容'
  },
  {
    id: 1,
    name: '1',
    title: '这是一个内容'
  },
  {
    id: 2,
    name: '2',
    title: '这是一个内容'
  },
  {
    id: 3,
    name: '3',
    title: '这是一个内容'
  },
  {
    id: 4,
    name: '4',
    title: '这是一个内容'
  },
  {
    id: 5,
    name: '5',
    title: '这是一个内容'
  },
  {
    id: 6,
    name: '6',
    title: '这是一个内容'
  },
  {
    id: 7,
    name: '7',
    title: '这是一个内容'
  },
  {
    id: 8,
    name: '8',
    title: '这是一个内容'
  },
  {
    id: 9,
    name: '9',
    title: '这是一个内容'
  },
  {
    id: 10,
    name: '10',
    title: '这是一个内容'
  },
  {
    id: 11,
    name: '11',
    title: '这是一个内容'
  },
  {
    id: 12,
    name: '12',
    title: '这是一个内容'
  }
]

export default {
  name: 'ComponentSearch',
  components: { FormRow, TagSelectOption, TagSelect },
  data() {
    return {
      itemList
    }
  },
  methods: {
    lookMyself() {
      this.form.setFieldsValue({
        owner: '3'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search-form {
  margin-bottom: 24px;
}
</style>
