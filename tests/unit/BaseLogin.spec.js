import BaseLogin from "@/components/BaseLogin.vue";
import Register from "@/Views/Register.vue";
import {mount} from "@vue/test-utils";
import store from "./../../src/store";
import router from "./../../src/router";

describe("BaseLogin.vue", () => {
  test("By default, the username and password fields should be empty when starting", async () => {
    router.push('/')

    // After this line, router is ready
    await router.isReady()

    const wrapper = mount(BaseLogin, {
      global: {
        plugins: [store, router]
      }
    })

    const input1 = wrapper.find('[data-testid="username-input"]')
    expect(input1.getValue).toBe(undefined)

    const input2 = wrapper.find('[data-testid="password-input"]')
    expect(input2.getValue).toBe(undefined)

    
    expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(false)
  });


  test("Entering incorrect data should not log the user in", async () => {
    router.push('/')

    // After this line, router is ready
    await router.isReady()

    const wrapper = mount(BaseLogin, {
      global: {
        plugins: [store, router]
      }
    })

    const input1 = wrapper.find('[data-testid="username-input"]')
    await input1.setValue("Ole")

    expect(wrapper.find('[data-testid="username-input"]').element.value).toBe("Ole")
    
    
    const input2 = wrapper.find('[data-testid="password-input"]')
    await input2.setValue("passord123")
    
    expect(wrapper.html()).toContain("Regissdfter")
    
    await wrapper.trigger('submit')
    await wrapper.setData({loggedInUnsuccesfully: true})


    expect(wrapper.find('[data-testid="username-input"]').element.value).toBe("Ole")
    
    const input3 = wrapper.find('[data-testid="password-input"]')
    //expect(input3.text()).toBe("")

    const input4 = wrapper.find('[data-testid="username-input"]')
    //expect(input4.text()).toBe("")

    //expect(wrapper.find('[data-testid="username-input"]').exists()).toBe(true)
    //expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(true)
    expect(wrapper.html()).toContain("Regisster")
  });
});
