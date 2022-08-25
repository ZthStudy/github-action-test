import {
  computed,
  defineComponent,
  reactive,
  ref,
  watchEffect,
  watchSyncEffect,
} from 'vue';
import HelloWorld from './components/HelloWorld';

export default defineComponent({
  setup(this, props, ctx) {
    console.log(this, props, ctx);

    const name = ref('tiantian');

    const map = reactive(new Map([['a', 'a']]));

    const msgComputed = computed(() => {
      return name.value + 'aaa';
    });

    watchSyncEffect(() => {
      const temp = map.get('a');
      console.log({ temp });
    });

    console.log(msgComputed);

    const onChange = () => {
      map.set('a', 'b');
    };
    return () => {
      console.log(1);

      return (
        <div>
          <HelloWorld msg={map.get('a') as string}></HelloWorld>
          <button onClick={onChange}>change</button>
        </div>
      );
    };
  },
});
