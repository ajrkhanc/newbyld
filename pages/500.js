// 500.js
import Head from 'next/head';

const Custom500 = ({ statusCode, posts }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="container">
        <div className="row ptt-60 pbb-60">
          <div className="col-12">
            <div className="contact-title text-center">
              <h1>{statusCode} - Server-side error occurred</h1>
              <p>Sorry, the page you are looking for does not exist.</p>
              {/* Use posts data here */}
              {posts && (
                <div>
                  <h2>Posts Data</h2>
                  {/* Display posts data as needed */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Custom500.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  // Fetch posts data here (replace with your API endpoint)
  try {
    const postsResponse = await fetch('https://byldblogs.vercel.app/api/posts');
    const postsData = await postsResponse.json();

    return { statusCode, posts: postsData };
  } catch (error) {
    console.error('Error fetching posts data:', error);
    return { statusCode, posts: null }; // Handle error gracefully
  }
};

export default Custom500;
