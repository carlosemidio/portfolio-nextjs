import React, { Component } from 'react';
import Layout from '../../components/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import InfiniteScroll from 'react-infinite-scroll-component';
import PulseLoader from 'react-spinners/PulseLoader';
import Card from '../../components/Card';
import { orderBy } from 'lodash';
import { Container } from '@material-ui/core';
import { GetStaticProps } from 'next';
import Navbar from '../../components/Navbar';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundImage: "url('/background.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundAttachment: 'fixed',
      position: 'relative',
      zIndex: 0,
      '&::after': {
        content: '""',
        opacity: '.7',
        zIndex: -1,
        backgroundColor: '#000000',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      },
    },
    posts: {
      display: 'flex',
      justifyContent: 'center',
      padding: 15,
      width: '100%',
    },
    infiniteScroll: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      '& > div': {
        marginRight: '.5%',
        marginBottom: '.5%',
      },
      '& > div:nth-child(3n)': {
        marginRight: '0',
      },
    },
    fab: {
      position: 'fixed',
      zIndex: 9999,
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    },
  });

interface ImageProps {
  name: string;
  url: string;
}

interface PostProps {
  id: number;
  title: string;
  image: ImageProps;
  keywords: string;
  description: string;
  content: string;
  updated_at: Date;
}

type Props = WithStyles<typeof styles> & {
  postList?: Array<PostProps>;
  post?: PostProps;
  lastCount?: number;
  pages?: number;
  error?: Array<Object>;
  loading?: boolean;
  openModal?: boolean;
};

interface IState {
  posts?: Array<PostProps>;
  post?: PostProps;
  lastCount?: number;
  pages?: number;
  error?: Array<Object>;
  loading?: boolean;
  openModal?: boolean;
}

class PostList extends Component<Props, IState> {
  state: IState = {
    posts: this.props.postList,
    post: null,
    lastCount: 0,
    pages: 10,
    error: null,
    loading: false,
    openModal: false,
  };

  constructor(props) {
    super(props);
  }

  fetchMoreData = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.getPosts();
    }, 1500);
  };

  async getPosts() {
    await this.setState({
      lastCount: this.state.posts.length,
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?from=${this.state.posts.length}&pages=${this.state.pages}`
    );
    const posts = await res.json();

    this.setState({
      posts: this.state.posts.concat(posts),
      loading: false,
    });
  }

  render() {
    const posts = orderBy(
      this.state.posts,
      ['id', 'name'],
      ['desc', 'asc']
    ).map((post) => (
      <Card
        key={post.id}
        module={post}
        imageTitle={post.image.name}
        imageUrl={post.image.url}
        moduleName="post"
        moduleUrl="posts"
        modulePage="blog"
        moduleDescription={post.description}
      />
    ));

    const { classes } = this.props;

    return (
      <main className={classes.root} id="home">
        <CssBaseline />
        <Layout title="posts">
          <Container>
            <Navbar />
            <div className={classes.posts}>
              <InfiniteScroll
                className={classes.infiniteScroll}
                dataLength={this.state.posts.length}
                next={this.fetchMoreData}
                hasMore={
                  this.state.posts.length >=
                  this.state.lastCount + this.state.pages
                }
                loader={
                  <PulseLoader
                    size={16}
                    color={'#123abc'}
                    loading={this.state.loading}
                  />
                }
              >
                {posts}
              </InfiniteScroll>
            </div>
          </Container>
        </Layout>
      </main>
    );
  }
}

export default withStyles(styles)(PostList);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/?from=0&pages=10`
  );
  const posts = await res.json();

  return {
    props: {
      postList: posts !== undefined ? posts : [],
    },
    revalidate: 3600, // 1hr
  };
};