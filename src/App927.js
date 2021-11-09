import React, { useState, useEffect } from 'react'
import './App.css'
import $ from 'jquery'
import { cleanup } from '@testing-library/react'
function App() {
  const [text, setText] = useState('')
  const [li, setLi] = useState('')
  const list = ['banana', 'apple', 'peach']
  //寫一個function點擊enter時清空裡面的值
  function cleanText() {
    let newText = { ...text }
    newText = ''
    setText(newText)
  }
  // 寫一個function點擊li時他的value傳到input裡
  //寫一個function讓輸入input時filter li
  useEffect(() => {
    // 輸入框聚焦時出現下方選項
    $('.input').on('focus', function () {
      $(this).closest('div').find('ul').addClass('display')
    })
    //點擊選項時增加selected並移除其他點選的class
    $('.ul li').on('click', function () {
      $(this).siblings().removeClass('selected')
      $(this).addClass('selected')
    })
    //選擇城市
    var cities = [
      { label: 'Taipei', value: '台北市' },
      { label: 'Tainan', value: '台南市' },
      { label: 'Yunlin', value: '雲林縣' },
      { label: 'New Taipei', value: '新北市' },
      { label: 'Taoyuan', value: '桃園市' },
      { label: 'Kaohsiung', value: '高雄市' },
    ]
    // 取得datalist的dom
    var datalistDom = document.getElementById('cities')
    // 載入資料到datalist
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i]
      // var option = document.createElement('option')
      var option = document.createElement('option')
      // option.setAttribute('label', city.label)
      option.setAttribute('value', city.value)
      option.setAttribute('type', 'checkbox')
      datalistDom.appendChild(option)
    }
  }, [])

  return (
    <>
      <div className="div">
        <span className="input" placeholder="請輸入"></span>
        <ul className="ul">
          {list.length > 0 &&
            list.map((v, i) => {
              return (
                <li
                  value={v}
                  onClick={() => {
                    setLi(v)
                    //  console.log(v)
                  }}
                >
                  {v}
                </li>
              )
            })}
        </ul>
        <p>選擇城市:</p>

        <span
          type="text"
          list="cities"
          // value={text}
          // onChange={(e) => {
          //   setText(e.target.value)
          // }}
        >
          <textarea
            className="citiinput"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            onKeyPress={() => {
              cleanText()
            }}
          ></textarea>
        </span>

        <br />
        <datalist className="cities" id="cities"></datalist>
        <span className="span">
          <ul>
            <li>
              <button>x</button>
              <span>{text}</span>
            </li>
          </ul>
        </span>
      </div>
    </>
  )
}

export default App
