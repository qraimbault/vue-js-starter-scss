import { shallow } from 'vue-test-utils';
import Articles from './Articles.vue';

describe('Articles.vue', () => {
  const articles = [
    {
      title: 'test1', 
      body: 'test content',
    },
    {
      title: 'test2', 
      body: 'test content',
    },
  ];
  it('Displays all articles', () => {
    const wrapper = shallow(Articles, {
      propsData: { articles },
    });
    expect(wrapper.findAll('li')).toHaveLength(articles.length);
  });
});
