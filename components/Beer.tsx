import { IBeer } from '@/types/beers';

interface BeerProps {
  beer: IBeer;
}

const Beer: React.FC<BeerProps> = ({ beer }) => {
  return (
    <tr key={beer.id}>
      <td>{beer.text}</td>
      <td>IPA</td>
    </tr>
  );
};

export default Beer;
