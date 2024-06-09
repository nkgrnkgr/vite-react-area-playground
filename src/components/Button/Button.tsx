import type React from "react";
import { Button as Component, type PressEvent } from "react-aria-components";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onPress: (e: PressEvent) => void;
};

export function Button({ children, onPress }: Props) {
  return (
    <Component className={styles.button} onPress={onPress}>
      {children}
    </Component>
  );
}
