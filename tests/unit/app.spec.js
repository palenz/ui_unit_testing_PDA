import App from "@/App.vue";
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('App', () => {
    let wrapper;
    beforeEach(()  => {
        wrapper = shallowMount(App)
    });

it("can add two numbers", () => {
    wrapper.vm.previousTotal = 1;
    wrapper.vm.add(4)
    expect(wrapper.vm.runningTotal).to.equal(5);
    });

it("can substract two numbers", () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3);
})

it("can multiply two numbers", () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15);
})

it("can divide two numbers", () => {
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide(7);
    expect(wrapper.vm.runningTotal).to.equal(3);
})

it("can clear", () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0);
})

it("can concatenate", () => {
    wrapper.vm.numberClick(1);
    wrapper.vm.numberClick(2);
    expect(wrapper.vm.runningTotal).to.equal(12);
})

it("can chain operators", () => {
    wrapper.vm.previousTotal = 2;
    wrapper.vm.operatorClick(wrapper.vm.add(3));
    expect(wrapper.vm.runningTotal).to.equal(5);
})

});