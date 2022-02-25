import LogIn from "@/views/LogIn.vue";
import BaseLogin from "@/components/BaseLogin.vue";
import {mount} from "@vue/test-utils";
import router from "./../../src/router";

import store from "./../../src/store";

describe("LogIn.vue", () => {
  test("Entering incorrect data should not log the user in", async () => {

    router.push('/')

    // After this line, router is ready
    await router.isReady()

    const wrapper = mount(LogIn, {
        global: {
            plugins: [store, router]
        }
    })

    expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(false)

    const input1 = wrapper.find('[data-testid="username-input"]')
    await input1.setValue("Ole")

    
    
    const input2 = wrapper.find('[data-testid="password-input"]')
    await input2.setValue("passord123")
    
    //expect(wrapper.html()).toContain("Regissdfter")

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('[data-testid="register-link"]').isVisible()).toBe(true)
    expect(store.state.loggedIn).toBe("false")
  });


  test("Entering correct data should  log the user in", async () => {
    router.push('/')

    // After this line, router is ready
    await router.isReady()

    const wrapper = mount(LogIn, {
        global: {
            plugins: [store, router]
        }
    })

    expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(false)

    const input1 = wrapper.find('[data-testid="username-input"]')
    await input1.setValue("Elias")

    
    
    const input2 = wrapper.find('[data-testid="password-input"]')
    await input2.setValue("sdf")
    
    
    await wrapper.find('button').trigger('click')
    
    //expect(wrapper.html()).toContain("Regissdfter")
    expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(false)

    expect(store.state.loggedIn).toBe(true)
  });
});
