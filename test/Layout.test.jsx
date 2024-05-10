import { fireEvent, render, screen } from '@testing-library/react'
import Layout from '../src/pages/Layout'
import App from '../src/App'

const setup = () => {
  const app = render(<App />)
  const layout = screen.getByPlaceholderText("Search Books, Authors, Friends, or Group Chats");
  fireEvent.change(layout, {target: {value: "Happy Cat"}});
  return {layout, app};
}

test("it should be happy cat", () => {
  const {layout} = setup();
  expect(layout.value).toBe("Happy Cat");
})