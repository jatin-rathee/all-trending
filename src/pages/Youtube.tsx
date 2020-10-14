import React from "react";
import axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

const Youtube = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${process.env.REACT_APP_YOUTUBE_KEY}&part=snippet&maxResults=10&regionCode=in`
      )
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
      });
  }, []);

  return (
    <Container className="py-3">
      <h1 className="text-center my-2">Youtube Trending</h1>
      <ListGroup className="mt-3">
        {data.map((video, i) => (
          <ListGroupItem>
            <span className="mr-3">{i + 1}.</span>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
            >
              {video.snippet.localized.title}
            </a>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Youtube;
