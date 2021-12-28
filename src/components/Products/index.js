import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = props => {
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
          className="product-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </div>
  )
}
export default Products
