import logo from './logo.svg';
import './App.css';

import data from './data.json'

import { ProductCard } from './components/ProductCard'
import { CollectionSort } from './components/CollectionSort';

console.log(data);


function App() {
  return (
    <div>
      <nav className='products-filter'>
        <h1>Jackets</h1>
        <div className='sort'>
          <CollectionSort data={['all Jackets', '2016', 'jacket','Jackets','layers','Obermeyer','Roxy','womens']} title='Filter by:' />
          <CollectionSort data={['Featured', 'Best Selling','Alphabetically, A-Z','Alphabetically, Z-A','Price, low to high','Price, high to low','Date, new to old','Date, old to new']} title='Sort by:' />
        </div>
      </nav>
      <section className="products">
        {data.map((item,i) => {
          console.log(item);
          return <ProductCard key={i} rate={item.rating.rate} des={item.description} price={item.price} image={item.image} title={item.title} />
        }

        )}
      </section>
    </div>
  )
}





export default App;
