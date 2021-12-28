import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    history.replace('/login')
  }
  return (
    <div>
      <Header />
      <div className="text-center mt-4">
        <img
          className="cart-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </div>
  )
}

export default Cart
