
##### React Accordion-Single-Multi-Selection-Menu

![Accordion-Single-Multi-Selection-Menu-Project](AccordionMenu.gif)

In State Management Part
const [selected, setSelected] = useState(null);
const [enableMultiSelection, setEnableMultiSelection] = useState(false);
const [multiple, setMultiple] = useState([]);
 
selected: Tracks the currently selected item for single selection mode.
enableMultiSelection: A boolean that determines if multi-selection mode is enabled.
multiple: An array that tracks selected items in multi-selection mode.

In Event Handlers Part

Single Selection Handler:

function handleSingleSelection(getCurrentId) {
  console.log(getCurrentId);
  setSelected(getCurrentId === selected ? null : getCurrentId);
}

handleSingleSelection toggles the selection of a single item. If the item is already selected, it deselects it; otherwise, it selects it.

Multiple Selection Handler:

function handleMultiSelection(getCurrentId) {
  let cpyMultiple = [...multiple];
  const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
  console.log(findIndexOfCurrentId);

  if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
  else cpyMultiple.splice(findIndexOfCurrentId, 1);
  setMultiple(cpyMultiple);
}

handleMultiSelection toggles the selection of an item in multi-selection mode. It adds the item to the multiple array if it's not present, or removes it if it is.

A button toggles the enableMultiSelection state, allowing switching between single and multiple selection modes.
The accordion div maps over the data array to render each item.

Each item has an onClick event handler that toggles selection based on the enableMultiSelection state and single selected state based on which button state is selected or not.

The content of each item is conditionally rendered based on whether the item is selected in either single or multi-selection mode.

Conditionally renders the content based on selection states
