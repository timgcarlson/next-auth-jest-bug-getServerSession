import { render, screen } from "@testing-library/react"
import GetServerSessionPage from "../../pages/get-server-session-page"

describe("pages/get-server-session-page", () => {
  it("should render a title", () => {
    render(<GetServerSessionPage />)

    expect(
      screen.getByText("Example Page Using getServerSideProps")
    ).toBeInTheDocument()
  })
})
