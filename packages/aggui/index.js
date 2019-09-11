import Button from 'button/index.js'

const components = [
    Button
];

const install = function(Vue, opts = {}) {

    components.forEach(component => {
        Vue.component(component.name, component);
    });


};

export default {
    Button
}