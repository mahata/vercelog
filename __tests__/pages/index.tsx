import Home from "../../pages";
import {render, screen} from "@testing-library/react";

describe('index', () => {
  it('foo', () => {
    expect(1).toBe(1);
  });

  it('render', () => {
    render(<Home />);

    expect(screen.getByText('自己紹介')).toBeInTheDocument();
  });
});
