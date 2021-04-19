import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import Lightbox from "react-image-lightbox";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const styles = (theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
    },
    gallery: {
      zIndex: 9999,
    },
  });

type Props = WithStyles<typeof styles> & {
  images: string[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

interface IState {
  photoIndex: number;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Gallery extends Component<Props> {
  state: IState = {
    photoIndex: 0,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { photoIndex } = this.state;
    const { classes, setIsOpen, isOpen } = this.props;

    const images = this.props.images.map((image, index) => {
      return <img className={classes.image} src={image} />;
    });

    return (
      <>
        <Carousel
          ssr
          infinite={true}
          autoPlay={!isOpen}
          arrows={true}
          responsive={responsive}
        >
          {images}
        </Carousel>

        {isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex]}
            nextSrc={
              this.props.images[(photoIndex + 1) % this.props.images.length]
            }
            prevSrc={
              this.props.images[
                (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.props.images.length - 1) %
                  this.props.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length,
              })
            }
          />
        )}
      </>
    );
  }
}

export default withStyles(styles)(Gallery);
