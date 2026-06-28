# Stop Doomscrolling (SDS)

A React Native application designed to help users limit their screen time and break the habit of doomscrolling.

## Features

- **Customizable Timer**: Set a target time, start, pause, and reset the countdown.
- **Focus Lock**: A full-screen overlay that prevents app interaction until a "Press and Hold" button is fully triggered to unlock.

## Roadmap & Tasks

### Phase 1: Project Setup
- [ ] Initialize React Native project (Expo recommended for study).
- [ ] Set up project folder structure (`/src/components`, `/src/screens`, `/src/hooks`).
- [ ] Install basic dependencies (e.g., `lucide-react-native` for icons).

### Phase 2: Timer Implementation
- [ ] Create a Timer state management system (start, pause, reset logic).
- [ ] Build the Timer UI:
    - [ ] Time input/selection interface.
    - [ ] Digital clock display.
    - [ ] Control buttons (Start, Pause, Reset).
- [ ] Implement notification or alert when the timer reaches zero.

### Phase 3: Focus Lock Mechanism
- [ ] Create a full-screen `LockOverlay` component.
- [ ] Implement a "Press and Hold" button:
    - [ ] Track touch start and end.
    - [ ] Visual progress indicator (e.g., a filling circle) during the hold.
    - [ ] Trigger unlock only after a specific duration (e.g., 3-5 seconds).
- [ ] Integrate the lock trigger with the timer completion.

### Phase 4: Refinement & Study
- [ ] Implement basic styling and layout for a clean, distraction-free UI.
- [ ] Test on physical device to verify "Press and Hold" feel.
- [ ] Document lessons learned about React Native state and component lifecycle.
