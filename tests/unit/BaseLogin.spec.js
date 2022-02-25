import BaseLogin from "@/components/BaseLogin.vue";
import {mount} from "@vue/test-utils";
import router from "./../../src/router";

describe("BaseLogin.vue", () => {
  test("By default, the username and password fields should be empty when starting", async () => {
    const wrapper = mount(BaseLogin)

    const input1 = wrapper.find('[data-testid="username-input"]')
    expect(input1.getValue).toBe(undefined)

    const input2 = wrapper.find('[data-testid="password-input"]')
    expect(input2.getValue).toBe(undefined)
  });


  test("Entering data should emit an event", async () => {

    const wrapper = mount(BaseLogin)

    const input1 = wrapper.find('[data-testid="username-input"]')
    await input1.setValue("Ole")

    expect(wrapper.find('[data-testid="username-input"]').element.value).toBe("Ole")
    
    
    const input2 = wrapper.find('[data-testid="password-input"]')
    await input2.setValue("passord123")
    
    
    expect(wrapper.find('[data-testid="password-input"]').element.value).toBe("passord123")
    //expect(wrapper.html()).toContain("Regissdfter")
    
    await wrapper.find('button').trigger('click')
    //await wrapper.setData({loggedInUnsuccesfully: true})

    const formSubmittedCalls = wrapper.emitted('loginSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = {username: 'Ole', password: 'passord123'}
    expect(wrapper.emitted('loginSubmitted')[0][0]).toMatchObject(expectedPayload)

  });
});
