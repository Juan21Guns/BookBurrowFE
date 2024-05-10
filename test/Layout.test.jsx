import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Layout from '../src/pages/Layout'
import App from '../src/App'
import searchBooks from '../src/pages/BookSearch/booksApi'
import { expect } from 'vitest'

const setup = () => {
  const app = render(<App />)
  const layout = screen.getByPlaceholderText("Search Books, Authors, Friends, or Group Chats");
  const button = document.querySelector("#button");
  fireEvent.change(layout, {target: {value: "Happy Cat"}});
  return {layout, app, button};
}

// test("it should be happy cat", () => {
//   const {layout, button} = setup();
//   expect(layout.value).toBe("Happy Cat");
// })

// test("search should be null", () => {
//   waitFor(async () => await expect(searchBooks("as 324 2kh aldshf #")).toBe(null))
// })

test("Happy Cat Length", async () => {
  const results = await searchBooks("Jujutsu Kaisen");
  console.log("results are ");
  console.log(results);
})
//as 324 2kh aldshf #