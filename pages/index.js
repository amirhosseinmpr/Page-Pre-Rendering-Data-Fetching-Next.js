import path from 'path';
import fs from 'fs/promises';

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}> {product.title}</li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filepath);

  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    revalidate: 40,
  };
}
export default HomePage;
