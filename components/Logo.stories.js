import Logo from './Logo.vue'

export default {
  title: 'Logo',
  component: Logo
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<logo v-bind="$props" />'
})

export const LogoTest = Template.bind({})
