import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ForwardedRef, forwardRef } from "react";
import Card, { Gif } from "../Card/Card";
import { GridContainer } from "./styles";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { colors } from "../../styles/colors";

type GridProps = {
  gifs: Gif[];
}

const Grid = forwardRef(({ gifs }: GridProps, containerRef: ForwardedRef<HTMLDivElement> | any) => {

  const handleScrollTop = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return gifs && (
    <section>
      <GridContainer>
          {gifs.map((gif: Gif, index: number) => (
            <Card key={gif?.id.concat(String(index))} gif={gif} />
          ))}
        <button type="button" className="fab-button" onClick={handleScrollTop}>
          <FontAwesomeIcon icon={faArrowUp} size="lg" color={colors.white} />
        </button>
      </GridContainer>
    </section>
  );
})

Grid.defaultProps = {
  gifs: [] 
};

export default Grid;
