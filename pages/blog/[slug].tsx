import React, { useState, Fragment } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser';
import Layout from '../../components/Layout';
import { Breadcrumbs, Container, Divider, Typography } from '@material-ui/core';
import Link from 'next/link';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { GetStaticPaths, GetStaticProps } from 'next';
import Navbar from '../../components/Navbar';

const useStyles = makeStyles((theme: Theme) =>
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
    postBody: {
      backgroundColor: '#ffffff'
    },
    postImage: {
      width: '100%',
      height: 'auto',
    },
    breadcrumb: {
      cursor: 'pointer',
      fontFamily: 'Calibri-Light',
      color: [theme.palette.postText][0],
    },
    postTitle: {
      fontFamily: 'Calibri-Bold',
      fontSize: 41,
      color: `${[theme.palette.title.main]} !important`,
      textTransform: 'uppercase',
      width: '100%',
      textAlign: 'center',
      marginTop: '25px',
      paddingLeft: '10px',
      [theme.breakpoints.down('xs')]: {
        fontSize: 20,
      },
    },
    shareButtons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    postCategory: {
      position: 'relative',
      backgroundColor: `${[theme.palette.title.main]} !important`,
      fontFamily: 'Calibri-Light',
      color: [theme.palette.backgroundColor][0],
      padding: 5,
      fontSize: 16,
      borderRadius: 3,
      cursor: 'pointer',
      display: 'inline-block',
      marginTop: 40,
    },
    postContent: {
      marginBottom: 40,
      '& > * > span': {
        fontSize: 'inherit!important',
        color: `${[theme.palette.postText][0]}!important`,
        backgroundColor: `${[theme.palette.backgroundColor][0]}!important`,
      },
      '& > * > a': {
        fontSize: 'inherit!important',
        color: `${[theme.palette.navbarLink][0]}!important`,
        backgroundColor: `${[theme.palette.backgroundColor][0]}!important`,
        '& > span': {
          fontSize: 'inherit!important',
          color: `${[theme.palette.navbarLink][0]}!important`,
          backgroundColor: `${[theme.palette.backgroundColor][0]}!important`,
        },
      },
      '& > ul': {
        paddingLeft: 30,
        '& > li': {
          lineHeight: '24px',
          color: `${[theme.palette.postText][0]}!important`,
          backgroundColor: `${[theme.palette.backgroundColor][0]}!important`,
          '& > span': {
            color: `${[theme.palette.postText][0]}!important`,
            backgroundColor: `${[theme.palette.backgroundColor][0]}!important`,
          },
        },
      },
    },
    postAuthor: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 15,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    postAuthorImage: {
      width: 100,
      height: 100,
      objectFit: 'cover',
    },
    postAuthorInfo: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 15,
      color: `${[theme.palette.title.main]} !important`,
    },
    postAuthorName: {
      color: `${[theme.palette.title.main]} !important`,
      fontFamily: 'Calibri-Bold',
      fontSize: 16,
      fontWeight: 800,
    },
    postAuthorDescription: {
      fontFamily: 'Calibri-Regular',
      fontWeight: 400,
      fontSize: 15,
      color: `${[theme.palette.postAuthorDescription][0]} !important`,
    },
    postTags: {
      display: 'flex',
      padding: 15,
      '& > p:not(:first-child)': {
        marginLeft: 10,
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
        flexWrap: 'wrap',
      },
    },
    postTag: {
      backgroundColor: 'rgb(245, 245, 245)',
      color: '#000000',
      padding: 5,
      fontFamily: 'Calibri-Light',
      fontSize: 13,
      borderRadius: 3,
      maxWidth: '100%',
      cursor: 'pointer',
      [theme.breakpoints.down('xs')]: {
        marginTop: 15,
        with: 'auto',
      },
    },
  })
);

function Post({ post, appFontSize }) {
  const classes = useStyles();

  const [editorState, setEditorState] = useState(
    post
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(post.content)))
      : EditorState.createEmpty()
  );

  const markup = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  return (
      <main className={classes.root} id="home">
        <Layout
          pageTitle={post.title}
          currentURL={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
          previewImage={post.image.url}
          description={post.description}
          keywords={post.keywords}
          author={post.author.name}
        >
          <Navbar />
          <Fragment>
            <Container className={classes.postBody}>
              {post.image && (
                <img
                  className={classes.postImage}
                  alt={post.image.name}
                  src={post.image.url}
                />
              )}
              <Breadcrumbs>
                <Link href="/">
                  <Typography
                    className={classes.breadcrumb}
                    style={{ fontSize: appFontSize }}
                  >
                    Home
                  </Typography>
                </Link>
                <Link href="/blog">
                  <Typography
                    className={classes.breadcrumb}
                    style={{ fontSize: appFontSize }}
                  >
                    Blog
                  </Typography>
                </Link>
                <Typography
                  className={classes.breadcrumb}
                  style={{ fontSize: appFontSize }}
                >
                  {post.title}
                </Typography>
              </Breadcrumbs>
              <Link href={`/blog/categoria/${post.category.slug}`}>
                <p
                  className={classes.postCategory}
                  style={{ fontSize: appFontSize }}
                >
                  {post.category.name}
                </p>
              </Link>
              {post.title && (
                <h1
                  className={classes.postTitle}
                  style={{ fontSize: 25 + appFontSize }}
                >
                  {post.title}
                </h1>
              )}

              <div className={classes.shareButtons}>
                <div>
                  <FacebookShareButton
                    url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
                    quote={post.title}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>
                <div>
                  <LinkedinShareButton
                    title={post.title}
                    url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
                <div>
                  <TwitterShareButton
                    title={post.title}
                    url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <div>
                  <WhatsappShareButton
                    title={post.title}
                    url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>

              <div
                className={classes.postContent}
                style={{ fontSize: appFontSize }}
              >
                {editorState && parse(markup)}
              </div>
              <Divider />
              <div className={classes.postAuthor}>
                <img
                  src={post.author.image.url}
                  alt={post.author.name}
                  className={classes.postAuthorImage}
                />
                <div className={classes.postAuthorInfo}>
                  <p
                    className={classes.postAuthorName}
                    style={{ fontSize: appFontSize }}
                  >
                    {post.author.name}
                  </p>
                  <p
                    className={classes.postAuthorDescription}
                    style={{ fontSize: appFontSize - 2 }}
                  >
                    {post.author.description}
                  </p>
                </div>
              </div>
              <Divider />
              <div className={classes.postTags}>
                {post.tags &&
                  post.tags.map((tag) => (
                    <Link href={`/blog/tag/${tag.slug}`} key={tag.slug}>
                      <p
                        className={classes.postTag}
                        style={{ fontSize: appFontSize - 2 }}
                      >
                        {tag.name}
                      </p>
                    </Link>
                  ))}
              </div>
            </Container>
          </Fragment>
        </Layout>
    </main>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/?from=0&pages=10`
  );

  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/slug/${slug}`
  );

  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1, // 1 seconds
  };
};
