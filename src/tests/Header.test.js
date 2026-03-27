import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  test("renderiza o nome Richard Feitosa", () => {
    render(<Header onScrollContato={() => {}} />);
    expect(screen.getByText("Richard Feitosa")).toBeInTheDocument();
  });

  test("renderiza o titulo AI Project Architect", () => {
    render(<Header onScrollContato={() => {}} />);
    expect(screen.getByText("AI Project Architect")).toBeInTheDocument();
  });

  test("botao Vamos conversar existe e é clicavel", () => {
    const mockScroll = jest.fn();
    render(<Header onScrollContato={mockScroll} />);
    const botao = screen.getByText(/vamos conversar/i);
    fireEvent.click(botao);
    expect(mockScroll).toHaveBeenCalledTimes(1);
  });
});
