import { useEffect } from 'react';
import {Products} from '../Products/Products';
import { witProducts } from '../../hoc/withProducts';

const Home = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <div>
      <div>
        <h1>All Categories</h1>
      </div>
      <div>
        {data.categories.map(category => {
          if (category.name == 'all') {
            return <Products data={category} />;
          }
        })}
      </div>
    </div>
  );
};

export default witProducts(Home);
