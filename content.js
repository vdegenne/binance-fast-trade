/* States */
let type = 'buy'

/* Selectors */
const buy_button_selector = '[data-testid=BuyTab]'
const sell_button_selector = '[data-testid=SellTab]'
const last_slider_selector = '.bn-slider-stepper:last-of-type'
// const submit_buy_button_selector = '#orderformBuyBtn'
// const submit_sell_button_selector = '#orderformSellBtn'
const buy_quote_input_selector = '#FormRow-BUY-total'
const sell_quote_input_selector = '#FormRow-SELL-total'

/* Getters */
function get_ask_element () {
  return [...document.querySelectorAll('.ask-light')].reverse()[0]
}
function get_bid_element () {
  return document.querySelectorAll('.bid-light')[0]
}
// function get_transaction_type () {
//   let button = document.querySelector(submit_button_selector)
//   const reactInstancePropName = Object.getOwnPropertyNames(button).filter(n => n.startsWith('__reactInternalInstance'))[0]
//   button[reactInstancePropName]
//   if (button === undefined)
//   return button.textContent.split(' ')[0].toLocaleLowerCase()
// }



/* Main */
window.onload = function () {
  window.addEventListener('keyup', e => {
    // console.log(e)

    /* B */
    if (e.key === 'b') {
      document.querySelector(buy_button_selector).click()
      type = 'buy'
    }

    /* S */
    if (e.key === 's') {
      document.querySelector(sell_button_selector).click()
      type = 'sell'
    }

    /* F */
    if (e.key === 'f') {
      // const type = get_transaction_type();
      (type === 'buy' ? get_bid_element() : get_ask_element()).click()
      // focus on the quote input
      document.querySelector(type === 'buy' ? buy_quote_input_selector : sell_quote_input_selector).focus()
    }

    /* SHIFT + F */
    if (e.key === 'F') {
      document.querySelectorAll(last_slider_selector)[type === 'buy' ? 0 : 1].click()
    }
  })
}