import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Brochure from "@/pages/Brochure";

beforeEach(() => {
  sessionStorage.clear();
  vi.useFakeTimers();
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
const openAds = () => {
  render(<Brochure />);
  act(() => vi.advanceTimersByTime(30000));
};

describe("Mandatory two-ad sequence", () => {
  it("opens only after 30 seconds", () => {
    render(<Brochure />);
    act(() => vi.advanceTimersByTime(29999));
    expect(screen.queryByRole("dialog")).toBeNull();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByRole("dialog")).toBeTruthy();
  });
  it("does not allow dismissal on the first advertisement", () => {
    openAds();
    expect(screen.queryByRole("button", { name: "Fermer la publicité" })).toBeNull();
    fireEvent.click(screen.getByRole("dialog"));
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(sessionStorage.getItem("foceen-ad-shown")).toBeNull();
  });
  it("closes on the second advertisement and stays closed in the same session", () => {
    openAds();
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("button", { name: "Page suivante" }));
    fireEvent.click(screen.getByRole("button", { name: "Publicité précédente" }));
    expect(screen.queryByRole("button", { name: "Fermer la publicité" })).toBeNull();
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("button", { name: "Page suivante" }));
    fireEvent.click(screen.getByRole("button", { name: "Fermer la publicité" }));
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(sessionStorage.getItem("foceen-ad-shown")).toBe("1");
    cleanup();
    render(<Brochure />);
    act(() => vi.advanceTimersByTime(30000));
    expect(screen.queryByRole("dialog")).toBeNull();
  });
  it("advances to the second advertisement after a left swipe", () => {
    openAds();
    const dialog = screen.getByRole("dialog");
    fireEvent.touchStart(dialog, { touches: [{ clientX: 300, clientY: 200 }] });
    fireEvent.touchEnd(dialog, { changedTouches: [{ clientX: 100, clientY: 200 }] });
    expect(screen.getByRole("button", { name: "Fermer la publicité" })).toBeTruthy();
  });
});