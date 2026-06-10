import { KeyboardEvent, useState } from 'react';

type UseAccordionReturn = {
  /**
   * Indicates whether the accordion content is currently open.
   */
  isOpen: boolean;

  /**
   * Indicates whether the cursor is currently over the accordion container.
   */
  isHovered: boolean;

  /**
   * Toggles the open state of the accordion.
   */
  toggleAccordion: () => void;

  /**
   * Opens the accordion.
   */
  openAccordion: () => void;

  /**
   * Closes the accordion.
   */
  closeAccordion: () => void;

  /**
   * Sets the hover state to active.
   */
  handleMouseEnter: () => void;

  /**
   * Sets the hover state to inactive.
   */
  handleMouseLeave: () => void;

  /**
   * Handles keyboard interaction for Enter and Space.
   */
  handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
};

/**
 * Provides reusable accordion behavior for interactive components.
 *
 * Dependencies:
 * - Uses React `useState` to store open and hover state.
 * - Uses React `KeyboardEvent` typing for accessible keyboard interaction.
 *
 * Operations:
 * - Tracks whether the accordion is currently open.
 * - Tracks whether the cursor is currently hovering over the accordion.
 * - Exposes toggle, open, and close actions.
 * - Exposes mouse enter and mouse leave handlers for hover-based styling.
 * - Exposes keyboard handling for Enter and Space to support accessible toggling.
 *
 * @param {boolean} [initialOpen=false] - Optional initial open state of the accordion.
 * @returns {UseAccordionReturn} Reusable accordion state and event handlers for a component.
 */
export const useAccordion = (initialOpen = false): UseAccordionReturn => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Toggles the current open state.
   *
   * @returns {void} Does not return a value; updates the internal open state.
   */
  const toggleAccordion = (): void => {
    setIsOpen((prev) => !prev);
  };

  /**
   * Sets the accordion to the open state.
   *
   * @returns {void} Does not return a value; updates the internal open state.
   */
  const openAccordion = (): void => {
    setIsOpen(true);
  };

  /**
   * Sets the accordion to the closed state.
   *
   * @returns {void} Does not return a value; updates the internal open state.
   */
  const closeAccordion = (): void => {
    setIsOpen(false);
  };

  /**
   * Activates the hover state.
   *
   * @returns {void} Does not return a value; updates the internal hover state.
   */
  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  /**
   * Deactivates the hover state.
   *
   * @returns {void} Does not return a value; updates the internal hover state.
   */
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  /**
   * Toggles the accordion when the user presses Enter or Space.
   *
   * @param {KeyboardEvent<HTMLElement>} event - Keyboard event from the interactive accordion container.
   * @returns {void} Does not return a value; may prevent default behavior and toggle the accordion.
   */
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion();
    }
  };

  return {
    isOpen,
    isHovered,
    toggleAccordion,
    openAccordion,
    closeAccordion,
    handleMouseEnter,
    handleMouseLeave,
    handleKeyDown,
  };
};

export default useAccordion;