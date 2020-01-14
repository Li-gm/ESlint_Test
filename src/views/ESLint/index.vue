<!-- eslint-disable -->
<template>
  <Row>
    <Col>
    </Col>
    <div>
      <div style="text-align: center;font-size: 19px">
        <h1>Eslink</h1>
      </div>
    </div>
  </Row>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      travels: [
        {
          address: '',
          startDate: ''
        }
      ]
    }
  },
  methods: {
    name () {
      if (this.address === '1') {
        alert('111')
      }
    }
  }
}
</script>
<style scoped>
</style>
