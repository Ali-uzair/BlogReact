import React from "react";
import Posts from "../components/Posts";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/show/:id",
    search: "",
    hash: "",
    state: null,
    key: "5nvxpbdafa",
  }),
}));
describe("Posts Component", () => {
  // Test 1
  test("div avalable in componenet", () => {
    render(<Posts />, { wrapper: BrowserRouter });
    const posts = screen.getByTestId("posts");
    expect(posts).toBeInTheDocument();
  });

  //Test 2
  test("No Post Available sholud be in div", () => {
    render(<Posts />, { wrapper: BrowserRouter });
    const posts = screen.getByTestId("posts");
    expect(posts).toHaveTextContent("No Post Available");
  });

  test("posts should be displayed", () => {
    // // render(<Posts />, {wrapper: BrowserRouter})
    // // const articles = [{id: 1},{id: 2}]

    // // React.useState = jest.fn().mockReturnValue([articles, {}])

    // // shallow(<Posts />);
    // // const posts = screen.getByTestId("posts");
    // //     expect(posts).toBeInTheDocument();

    // // // const posts = screen.getByTestId("posts");
    // // const loginComponent = shallow(<Posts />);
    // // loginComponent.setState({ articles: [{id: 1}] });
    // // expect(loginComponent.find(Notification).length).toBe(1);

    // // const setState = jest.fn();
    // // const useStateSpy = jest.spyOn(React, "useState");
    // // useStateSpy.mockImplementation((initialState) => [initialState, setState]);
    // // const wrapper = shallow(<Posts />);
    // // const newInputValue = [{id: 1},{id: 2}];
    // //   wrapper
    // //     // .simulate("load", { target: { value: newInputValue } });
    // //     .setState({id: 1, value: newInputValue})
    // //   expect(setState).toHaveBeenCalledWith(newInputValue);

    // const realUseState = React.useState;

    // // // Stub the initial state
    // const stubInitialState = [
    //   { id: 1, title: "title", description: "desc" },
    //   { id: 2, title: "title2", description: "desc 2" },
    // ];

    // // // Mock useState before rendering your component
    // jest
    //   .spyOn(React, "useState")
    //   .mockImplementationOnce(() => realUseState(stubInitialState));
    // // render(<BrowserRouter><Posts /></BrowserRouter>)
    // const { debug } = render(<Posts />, { wrapper: BrowserRouter });
    // debug();
    // // const data = screen.getAllByTestId("item").map((li) => li.textContent);
    // // // expect(posts).toBeInTheDocument();
    // // console.log(data);

    // Cache original functionality
    const realUseState = React.useState;

    // Stub the initial state
    const stubInitialState = [
      { id: 1, title: "title", description: "desc" },
      { id: 2, title: "title2", description: "desc 2" },
    ];

    // Mock useState before rendering your component
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => realUseState(stubInitialState));

    render(<Posts />, { wrapper: BrowserRouter });

    const data = screen.getAllByTestId("item").map((li) => li.textContent);
    console.log(data);
    expect(data).toMatchInlineSnapshot(`
    Array [
      "titledesc",
      "title2desc 2",
    ]
    `);
    const list = screen.getAllByTestId("list")
    console.log(list)
    expect(list).toMatchInlineSnapshot(`
Array [
  <div
    class="card mb-4 bg-light"
    data-testid="list"
  >
    <div
      class="card-body"
    >
      <h5
        class="card-title item"
      >
        title
      </h5>
      <p
        class="card-text"
      >
        desc
      </p>
    </div>
  </div>,
  <div
    class="card mb-4 bg-light"
    data-testid="list"
  >
    <div
      class="card-body"
    >
      <h5
        class="card-title item"
      >
        title2
      </h5>
      <p
        class="card-text"
      >
        desc 2
      </p>
    </div>
  </div>,
]
`)

  const post = screen.getByTestId('post')
  expect(post).toBeInTheDocument()
  });
});
