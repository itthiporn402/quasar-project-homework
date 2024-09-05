import IndexPage from "src/pages/IndexPage.vue";
import { shallowMount } from '@vue/test-utils'

it("ทดสอบข้อมูลส่วนตัว", () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        code: '6604101402',
        firstName: 'Itthiporn',
        secondName: 'Khad-see',
        nickname: 'On'
      };
    },
  });

  // ตรวจสอบค่าข้อมูลในคอมโพเนนต์
  expect(wrapper.vm.code).toBe('6604101402');
  expect(wrapper.vm.firstName).toBe('Itthiporn');
  expect(wrapper.vm.secondName).toBe('Khad-see');
  expect(wrapper.vm.nickname).toBe('On');
});
