import React from 'react'
import Posts from "../components/Posts";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});
describe("Posts Component" ,() => {


  // Test 1
  test("div avalable in componenet", () => {
    render(<Posts />, {wrapper: BrowserRouter})
    const posts = screen.getByTestId("posts");
        expect(posts).toBeInTheDocument();
    })

  //Test 2
  test("No Post Available sholud be in div", () => {
    render(<Posts />, {wrapper: BrowserRouter})
    const posts = screen.getByTestId("posts");
        expect(posts).toHaveTextContent("No Post Available");
    })

  test("posts should be displayed" , () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((initialState) => [initialState, setState]);

    render(<Posts />, {wrapper: BrowserRouter})
    // const newInputValue = "React is Awesome";
    const posts = screen.getByTestId("item");
    console.log(posts)
    // const wrapper = shallow(<Posts />);
    // const newInputValue = "React is Awesome";
    // wrapper
    //   .find(".posts")
    //   .simulate("change", { target: { value: newInputValue } });
    // expect(setState).toHaveBeenCalledWith(newInputValue);

    // const realUseState = React.useState
    // const stubInitialState = ['stub data']
    // console.log(stubInitialState)
    // const mockResponseData = [{id: 1}, {id: 2}, {id: 3}];
    // jest
    // .spyOn(React, 'useState')
    // .mockImplementationOnce(() => realUseState(stubInitialState))
    // render(<Posts />, {wrapper: BrowserRouter});
    // const posts = screen.getByTestId("posts");
    // expect(posts).toHaveTextContent("No Post Available");

  });
})
