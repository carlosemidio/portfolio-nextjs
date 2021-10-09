import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InfiniteScroll from 'react-infinite-scroll-component';
import PulseLoader from 'react-spinners/PulseLoader';
import Card from '../../../components/Card';
import BlogForm from '../../../components/BlogForm';
import { orderBy } from 'lodash';
import { hasPermission } from '../../../services/acl';
import { Container } from '@material-ui/core';
import { EditorState, convertFromRaw } from 'draft-js';

const styles = (theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
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

interface CategoryProps {
  id: number;
  name: string;
  user_id: number;
  updated_at: Date;
}

interface TagProps {
  id: number;
  name: string;
  user_id: number;
  updated_at: Date;
}

interface AuthorProps {
  id: number;
  name: string;
  user_id: number;
  updated_at: Date;
}

interface PostProps {
  id: number;
  title: string;
  user_id: number;
  category_id: number;
  author_id: number;
  tags: Array<TagProps>;
  image: ImageProps;
  keywords: string;
  description: string;
  content: string;
  updated_at: Date;
}

type Props = WithStyles<typeof styles> & {
  postList?: Array<PostProps>;
  categoryList?: Array<CategoryProps>;
  authorList?: Array<AuthorProps>;
  tagList?: Array<TagProps>;
  post?: PostProps;
  slug: string;
  lastCount?: number;
  pages?: number;
  error?: Array<Object>;
  loading?: boolean;
  openModal?: boolean;
};

interface IState {
  posts?: Array<PostProps>;
  post?: PostProps;
  categories?: Array<CategoryProps>;
  authors?: Array<AuthorProps>;
  tags?: Array<TagProps>;
  lastCount?: number;
  pages?: number;
  error?: Array<Object>;
  loading?: boolean;
  openModal?: boolean;
}

class PostList extends Component<Props, IState> {
  static async getInitialProps({ query }) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/tag/${query.slug}/?from=0&pages=10`
    );
    const posts = await res.json();
    const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    const categories = await res1.json();
    const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authors`);
    const authors = await res2.json();
    const res3 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`);
    const tags = await res3.json();

    return {
      postList: posts !== undefined ? posts : [],
      categoryList: categories !== undefined ? categories : [],
      authorList: authors !== undefined ? authors : [],
      tagList: tags !== undefined ? tags : [],
      slug: query.slug,
    };
  }

  state: IState = {
    posts: this.props.postList,
    post: null,
    categories: this.props.categoryList,
    authors: this.props.authorList,
    tags: this.props.tagList,
    lastCount: 0,
    pages: 10,
    error: null,
    loading: false,
    openModal: false,
  };

  constructor(props) {
    super(props);
    this.onDeletePost = this.onDeletePost.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleUpdatePost = this.handleUpdatePost.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ openModal: true, post: null });
  }

  handleCloseModal() {
    this.setState({ openModal: false });
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
      `${process.env.NEXT_PUBLIC_API_URL}/posts/tag/${this.props.slug}/?from=${this.state.posts.length}&pages=${this.state.pages}`
    );
    const posts = await res.json();

    this.setState({
      posts: this.state.posts.concat(posts),
      loading: false,
    });
  }

  async handleNewPost(post) {
    await this.setState({
      posts: [post].concat(this.state.posts),
      openModal: false,
    });
  }

  async handleEditPost(_post) {
    await this.setState({
      post: _post,
      openModal: true,
    });
  }

  async handleUpdatePost(_post) {
    this.setState({
      posts: this.state.posts.filter((item) => {
        if (item.id !== _post.id) {
          return _post;
        }
      }),
      post: null,
    });

    this.handleNewPost(_post);
  }

  async onDeletePost(post) {
    await this.setState({
      posts: this.state.posts.filter(function (_post) {
        return _post.id !== post.id;
      }),
      lastCount: this.state.lastCount - 1,
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
        onDeleteModule={this.onDeletePost}
        editModule={this.handleEditPost}
        handleOpen={this.handleOpenModal}
      />
    ));

    const { classes } = this.props;

    const canCreate = hasPermission('create-post');

    return (
      <>
        <CssBaseline />
        <Layout title="posts">
          <Container>
            {canCreate ? (
              <div>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={this.state.openModal}
                  onClose={this.handleCloseModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <>
                    <Fade in={this.state.openModal}>
                      <BlogForm
                        post_id={this.state.post && this.state.post.id}
                        user_id={this.state.post && this.state.post.user_id}
                        category_id={
                          this.state.post && this.state.post.category_id
                        }
                        author_id={this.state.post && this.state.post.author_id}
                        title={this.state.post && this.state.post.title}
                        image={this.state.post && this.state.post.image}
                        keywords={this.state.post && this.state.post.keywords}
                        description={
                          this.state.post && this.state.post.description
                        }
                        categories={
                          this.state.categories &&
                          this.state.categories.map((category) => {
                            return {
                              name: category.name,
                              value: `${category.id}`,
                            };
                          })
                        }
                        authors={
                          this.state.authors &&
                          this.state.authors.map((author) => {
                            return { name: author.name, value: `${author.id}` };
                          })
                        }
                        _tags={
                          this.state.tags &&
                          this.state.tags.map((tag) => {
                            return { name: tag.name, value: `${tag.id}` };
                          })
                        }
                        tags={
                          this.state.post != null
                            ? this.state.post.tags.map((tag) => {
                                return `${tag.id}`;
                              })
                            : []
                        }
                        editorState={
                          this.state.post !== null &&
                          this.state.post !== undefined
                            ? EditorState.createWithContent(
                                convertFromRaw(
                                  JSON.parse(this.state.post.content)
                                )
                              )
                            : EditorState.createEmpty()
                        }
                        handleNewPost={this.handleNewPost}
                        handleUpdatePost={this.handleUpdatePost}
                        handleCloseModal={this.handleCloseModal}
                      />
                    </Fade>
                  </>
                </Modal>
              </div>
            ) : (
              <></>
            )}

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
            {canCreate && (
              <Fab
                color="secondary"
                aria-label="add"
                className={classes.fab}
                onClick={this.handleOpenModal}
              >
                <AddIcon />
              </Fab>
            )}
          </Container>
        </Layout>
      </>
    );
  }
}

export default withStyles(styles)(PostList);

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`);

//   const tags = await res.json();

//   const paths = tags.map((tag) => {
//     return {
//       params: {
//         slug: tag.slug,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const { slug } = ctx.params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/posts/tag/${slug}/?from=0&pages=10`
//   );
//   const posts = await res.json();
//   const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
//   const categories = await res1.json();
//   const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authors`);
//   const authors = await res2.json();
//   const res3 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`);
//   const tags = await res3.json();

//   return {
//     props: {
//       postList: posts !== undefined ? posts : [],
//       categoryList: categories !== undefined ? categories : [],
//       authorList: authors !== undefined ? authors : [],
//       tagList: tags !== undefined ? tags : [],
//       slug: slug,
//     },
//     revalidate: 8640, // 24 hours
//   };
// };
