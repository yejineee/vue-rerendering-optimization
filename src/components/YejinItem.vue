<template>
  <div class="rr-item">
    <div class="rr-item__check">
      <input
        :checked="isChecked"
        type="checkbox"
        @change="$emit('change:checked', $event.target.checked)"
      >
    </div>
    <div class="rr-item__title">
      <input
        :value="item.title"
        @change="$emit('update:title', $event.target.value)"
      >
    </div>
    <strong>
      {{item.title}}
    </strong>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      types: Object,
      required: true
    },
    isChecked: {
      types: Boolean,
      required: true
    }
  },
  updated () {
    console.count('YejinItem updated')
  }
}
</script>
