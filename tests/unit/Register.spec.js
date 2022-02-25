import Register from "@/views/Register.vue";
import {mount} from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";

describe("LogIn.vue", () => {
  test("Entering incorrect data should not let the user register", async () => {

    const wrapper = mount(Register)

    const input1 = wrapper.find('[data-testid="register-name"]')
    await input1.setValue("")

    
    
    const input2 = wrapper.find('[data-testid="register-email"]')
    await input2.setValue("")

    const input3 = wrapper.find('[data-testid="register-address"]')
    await input3.setValue("")

    
    
    const input4 = wrapper.find('[data-testid="register-username"]')
    await input4.setValue("")

    const input5 = wrapper.find('[data-testid="register-password"]')
    await input5.setValue("")

    
    
    const input6 = wrapper.find('[data-testid="register-phone"]')
    await input6.setValue("")
    
    
    await wrapper.find('button').trigger('submit')
    
    //expect(wrapper.html()).toContain("Regissdfter")
    expect(wrapper.find('[data-testid="registered"]').exists()).toBe(false)
  });


  test("Entering correct data should  let the user register", async () => {
    const wrapper = mount(Register)

    //expect(wrapper.html()).toContain("Regissdfter")
    expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(false)

    const input1 = wrapper.find('[data-testid="register-name"]')
    await input1.setValue("Elias")

    
    
    const input2 = wrapper.find('[data-testid="register-email"]')
    await input2.setValue("elelmtg@gmail.com")

    const input3 = wrapper.find('[data-testid="register-address"]')
    await input3.setValue("lovveien 39")

    
    
    const input4 = wrapper.find('[data-testid="register-username"]')
    await input4.setValue("elel")

    const input5 = wrapper.find('[data-testid="register-password"]')
    await input5.setValue("Elias")

    
    
    const input6 = wrapper.find('[data-testid="register-phone"]')
    await input6.setValue("95072468")
    
    
    await wrapper.find('button').trigger('submit')
    //expect(wrapper.html()).toContain("Regissdfter")
    
    expect(wrapper.find('[data-testid="registered"]').exists()).toBe(true)

  });
});
