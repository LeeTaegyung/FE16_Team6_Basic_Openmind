import FloatingButton from './components/FloatingButton';
import PostHeader from './components/PostHeader';

function FeedPage() {
  return (
    <>
      <PostHeader
        name={'홍길동'}
        imageSource={
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8'
        }
      />
      <FloatingButton />
    </>
  );
}

export default FeedPage;
