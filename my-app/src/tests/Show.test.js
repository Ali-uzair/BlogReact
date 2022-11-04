import React from 'react';
import Show from "../components/Show"
import { render, screen } from "@testing-library/react";

describe("Posts Component", () => {
  test("no data found when array is empty in componenet", () => {
    render(<Show />);
    const posts = screen.getByTestId("postdata");
    expect(posts).toBeInTheDocument();
    expect(posts).toHaveTextContent("no data found");
  });

  test("should show when data is given in componenet", () => {
    const realUseState = React.useState;

    const stubInitialState =
    {"id":133,"title":"fdf","description":"fdf","name":"Ali Uzair","likes":1,"published":"2022-10-19T11:10:50.440Z","content":"","commentcount":2,"comments":[{"commentid":162,"name":"moderator","body":"sddsd"},{"commentid":163,"name":"moderator","body":"dsd"}],"suggestions":[{"suggestid":49,"name":"moderator","body":"dsds"}]}

    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => realUseState(stubInitialState));

    render(<Show />);
    const data = screen.getByTestId("data").textContent
    // console.log(data);
    expect(data).toMatchInlineSnapshot(`"fdfDescription: fdfPublished at: 2022-10-19T11:10:50.440ZCreated by: Ali Uzair"`);
  });

})
