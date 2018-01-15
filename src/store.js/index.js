import { observable, action, computed } from 'mobx';

const items = [
  {
    id: 0,
    name: 'react',
    price: 1993,
    num: 0,
    checked: true,
  },
  {
    id: 2,
    name: 'vue',
    price: 1994,
    num: 10,
    checked: false,
  },
];

class StoreState {
  @observable items = items;
  @observable checkedAll = false;

  @action
  del = id => {
    // this.items = this.items.filter(item => item.id !== id);
    this.items.forEach((item, i) => {
      if (item.id === id) {
        this.items.splice(i, 1);
      }
    });
  };

  @action
  addNum = (id, action) => {
    if (action === 'add') {
      return this.items.forEach(item => item.id === id && item.num++);
    }
    return this.items.forEach(item => item.id === id && item.num--);
  };

  @action
  check = id => {
    this.items.forEach(item => item.id === id && (item.checked = !item.checked));
    const all = this.items.every(item => item.checked === true);
    if (all) {
      this.checkedAll = true;
    } else {
      this.checkedAll = false;
    }
  };

  @action
  handleCheckall = () => {
    this.checkedAll = !this.checkedAll;
    this.items.forEach(item => (item.checked = this.checkedAll));
  };

  @computed
  get total() {
    return this.items.reduce((prev, cur) => {
      const value = cur.checked ? cur.price * cur.num : 0;
      return prev + value;
    }, 0);
  }
}

export default new StoreState();
