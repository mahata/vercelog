import Home from "../../pages";
import {render, screen} from "@testing-library/react";

const dummyAllPostData = [{
  id: "id1",
  title: "title1",
  date: "2021-01-01",
}, {
  id: "id2",
  title: "title2",
  date: "2021-01-02",
}];

describe('index', () => {
  it('render', () => {
    render(<Home allPostsData={dummyAllPostData} />);

    expect(screen.getByText('自己紹介をここに書くんだって。')).toBeInTheDocument();
  });
});
