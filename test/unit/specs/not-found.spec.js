import Vue from 'vue'
import notFound from '@/views/not-found'

describe('not-found.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(notFound)
    const vm = new Constructor().$mount()
    expect(vm.$el.lastElementChild.textContent)
      .to.equal('404')
  })
})
