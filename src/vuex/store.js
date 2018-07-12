const debug = process.env.NODE_ENV !== 'production';

const storeConfig = {
  modules: {},
  getters: {},
  state: {},
  mutations: {},
  actions: {},
  strict: debug,
};

export default storeConfig;
