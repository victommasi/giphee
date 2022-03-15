import Card, { Gif } from "../Card/Card";
import { GridContainer } from "./styles";

type GridProps = {
  gifs: Gif[];
}

const Grid = ({ gifs }: GridProps) => {
  return gifs && (
    <GridContainer>
      {gifs.map((gif: any, index: number) => (
        <Card key={gif?.id.concat(String(index))} gif={gif} />
      ))}
    </GridContainer>
  );
}

Grid.defaultProps = {
  gifs: [] 
};

export default Grid;
