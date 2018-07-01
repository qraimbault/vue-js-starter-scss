import { shallow } from 'vue-test-utils'
import Articles from 'Articles.vue';

describe('Articles.vue', () => {
  const articles = [
    {
      title: 'test1', 
      body: 'test content'
    },
    {
      title: 'test2', 
      body: 'test content'
    }];
  it('Displays Title', () => {
    const wrapper = shallow(Articles, {
      propsData: { articles }
    })
    expect(wrapper.findAll('h2')).toHaveLength(articles.length)
    expect(wrapper.findAll('p')).toHaveLength(articles.length)
  })
})