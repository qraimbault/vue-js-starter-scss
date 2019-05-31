import { shallowMount } from '@vue/test-utils';
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
    const wrapper = shallowMount(Articles, {
      propsData: { articles },
    });
    expect(wrapper.findAll('li')).toHaveLength(articles.length);
  });
});
