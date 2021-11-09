import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tshirtOne, setTshirtOne] = useState(1)
  const [tshirtTwo, setTshirtTwo] = useState(1)
  const [tshirtThree, setTshirtThree] = useState(1)
  //
  const products = [
    {
      name: 'TSHIRT-GOLD',
      catgory: 'shirt',
      price: 1200,
    },
  ]

  //統一一個初始化的值
  const [count, setCount] = useState(Array(products.lenght).fill(1))
  //設定每個產品單價
  const price = {
    tshirtOne: 300,
    tshirtTwo: 200,
    tshirtThree: 450,
  }
  //商品總額(數量*單價))
  const total = () =>
    Number(
      price['tshirtOne'] * tshirtOne +
        price['tshirtTwo'] * tshirtTwo +
        price['tshirtThree'] * tshirtThree
    ).toLocaleString()
  //tolocalstring就是如果超過千元 他有,  EX: 1,000

  // console.log(total())
  //商品數量
  const productCount = () => tshirtOne + tshirtTwo + tshirtThree
  //----------------------------------
  const array1 = ['abel', 'banana', 'chanel']
  const array2 = ['abel', 'banana', 'c']
  // const A = array1.forEach((element) => {['abel','banana','123588'].filter((item)=>{item === element}) );
  let aa = []
  array1.forEach((element) => {
    array2.forEach((item) => {
      if (element === item) {
        aa.push(item)
      }
    })
  })
  console.log(aa)

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/1GrakTl.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">Cotton T-shirt</div>
                </div>
                <div className="col">
                  <button
                    onClick={() => {
                      if (tshirtOne > 0) {
                        setTshirtOne(tshirtOne - 1)
                      }
                    }}
                  >
                    -
                  </button>

                  <a href="#" className="border">
                    {tshirtOne}
                  </a>
                  <button
                    onClick={() => {
                      if (tshirtOne >= 0) {
                        setTshirtOne(tshirtOne + 1)
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="col">
                  &euro; {price['tshirtOne'] * tshirtOne}{' '}
                  <span className="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/ba3tvGm.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">Cotton T-shirt</div>
                </div>
                <div className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    {tshirtTwo}
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  &euro; {price['tshirtTwo']}{' '}
                  <span className="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/pHQ3xT3.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">Cotton T-shirt</div>
                </div>
                <div className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    {tshirtThree}
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  &euro; {price['tshirtThree']}{' '}
                  <span className="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div className="back-to-shop">
              <a href="#">&leftarrow;</a>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col" style={{ paddingLeft: 0 }}>
                ITEMS {productCount()}
              </div>
              <div className="col text-right">&euro; {total()}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard-Delivery- &euro;5.00
                </option>
                <option className="text-muted">
                  Standard-Delivery- &euro;15.00
                </option>
                <option className="text-muted">
                  Standard-Delivery- &euro;25.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div
              className="row"
              style={{
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                padding: '2vh 0',
              }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">&euro; {total()}</div>
            </div>
            <button className="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
