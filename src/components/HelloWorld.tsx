import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    msg: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return <div>{props.msg}</div>;
    };
  },
});
