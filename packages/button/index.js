import Button from './src/button';

/* istanbul ignore next */
ElButton.install = function(Vue) {
    Vue.component(ElButton.name, ElButton);
};

export default ElButton;