<template>
  <div>
    <button @click="addItems">Add 10 items</button>
    <button @click="clear">Clear</button>
    <yejin-item
      v-for="data in extendedData"
      :key="data.id"
      :item="data.item"
      :is-checked="data.isChecked"
      @update:title="updateTitle({id: data.id, title: $event})"
      @change:checked="changeChecked({id: data.id, checked: $event})"
     />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import YejinItem from '@/components/YejinItem'

export default {
  components: {
    YejinItem
  },
  data () {
    return {
      extendedData: [],
      dataById: {}
    }
  },
  created () {
    this.addItems({ total: 4 })
  },
  mounted () {
  },
  computed: {
    ...mapGetters('yejin', ['items'])
  },
  methods: {
    ...mapActions('yejin', ['addItems', 'clear']),
    updateTitle ({ id, title }) {
      const data = this.dataById[id]
      if (data) {
        this.dataById[id].item = {
          ...data.item,
          title
        }
      }
    },
    changeChecked ({ id, checked }) {
      const data = this.dataById[id]
      if (data) {
        this.dataById[id].isChecked = checked
      }
    }
  },
  watch: {
    items () {
      this.extendedData = this.items.map(item => {
        const data = this.dataById[item.id]
        if (data) {
          return data
        }
        return {
          id: item.id,
          item,
          isChecked: false
        }
      })
    },
    extendedData () {
      this.dataById = this.extendedData.reduce((out, data) => {
        out[data.id] = data
        return out
      }, {})
    }
  }
}
</script>
