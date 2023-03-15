import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import Lightbox from 'react-image-lightbox';
import styles from './styles.module.scss';

type ImageProps = {
  alt: string;
  src: string;
}

type Props = {
  images: ImageProps[];
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
    const { setIsOpen, isOpen } = this.props;

    const images = this.props.images.map((image, index) => {
      return <img key={image.src} className={styles.image} src={image.src} />;
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
            mainSrc={this.props.images[photoIndex].src}
            nextSrc={
              this.props.images[(photoIndex + 1) % this.props.images.length].src
            }
            prevSrc={
              this.props.images[
                (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              ].src
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

export default Gallery;