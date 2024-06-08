import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as SelectComponent,
  SelectValue,
} from "react-aria-components";

export function Select() {
  return (
    <SelectComponent>
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
