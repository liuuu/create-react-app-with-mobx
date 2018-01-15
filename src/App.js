import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { observable } from 'mobx';
import { inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import styled from 'styled-components';

const CartItem = observer(({ item, addNum, check, del }) => {
  return (
    <div
      className="cart-item"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div>
        <label>
          <input type="checkbox" checked={item.checked} onChange={() => check(item.id)} />
        </label>
      </div>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <ul>
        <li onClick={() => addNum(item.id, 'minus')}>-</li>
        <li>{item.num}</li>
        <li onClick={() => addNum(item.id, 'add')}>+</li>
      </ul>
      <div>小计{item.price * item.num}</div>

      <div onClick={() => del(item.id)}>删除</div>
    </div>
  );
});

const AllItems = inject(['storeState'])(
  observer(({ storeState }) => {
    return storeState.items.map(item => (
      <CartItem
        key={item.id}
        item={item}
        check={storeState.check}
        addNum={storeState.addNum}
        del={storeState.del}
      />
    ));
  })
);

const Header = inject(['storeState'])(
  observer(props => (
    <Wrapper>
      <div>
        <label>
          <input
            type="checkbox"
            checked={props.storeState.checkedAll}
            onChange={props.storeState.handleCheckall}
          />
          全选
        </label>
      </div>
      <div>商品</div>
      <div>单价</div>
      <div>数量</div>
      <div>小计</div>
      <div>删除</div>
    </Wrapper>
  ))
);

const Footer = inject(({ storeState }) => ({
  total: storeState.total,
}))(
  observer(props => {
    console.log('props', props);

    return <div className="footer">总计: {props.total}</div>;
  })
);

class App extends Component {
  render() {
    return (
      <div>
        <h1>展示</h1>
        <Header />
        <AllItems />
        <Footer />
        <DevTools />
      </div>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default App;
