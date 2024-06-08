import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as SelectComponent,
  SelectValue,
} from "react-aria-components";
import styles from "./Select.module.css";

export function Select() {
  return (
    <SelectComponent className={styles.select}>
      <Label>Favorite Animal</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Hamster</ListBoxItem>
        </ListBox>
      </Popover>
    </SelectComponent>
  );
}
