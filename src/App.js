import React, { Component, createRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SKIP_VALUE = "skip";
const ICON_SIZE = 25;
const GRID_SIZE = 20;
const options = [
  {
    candidate: "Barack Obama",
    id: "option-0",
    selected: false
  },
  {
    candidate: "George Bush",
    id: "option-1",
    selected: false
  },
  {
    candidate: "Hillary Clinton",
    id: "option-2",
    selected: false
  },
  {
    candidate: "Bernie Sanders",
    id: "option-3",
    selected: false
  },
  {
    candidate: "Marco Rubio",
    id: "option-4",
    selected: false
  },
  {
    candidate: "George Washington",
    id: "option-5",
    selected: false
  },
  { candidate: "John Adams", id: "option-6", selected: false },
  {
    candidate: "Abraham Lincoln",
    id: "option-7",
    selected: false
  },
  {
    candidate: "Franklin D. Roosevelt",
    id: "option-8",
    selected: false
  },
  { candidate: "Ron Swanson", id: "option-9", selected: false }
];

// Reorder the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const getItemStyle = (isDragging, draggableStyle) => ({
  position: "relative",
  userSelect: "none",
  padding: GRID_SIZE,
  margin: `0 0 ${GRID_SIZE / 2}px 0`,
  // Change background colour if dragging
  background: isDragging ? "lightgreen" : "#d8d8d8",
  // Styles to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  width: 315,
  margin: "0 auto"
});

const iconStyles = {
  opacity: 0,
  transition: "0.2s ease-in-out",
  position: "absolute",
  left: -ICON_SIZE,
  top: GRID_SIZE,
  width: ICON_SIZE,
  height: ICON_SIZE,
  viewBox: `0 0 ${ICON_SIZE} ${ICON_SIZE}`,
  fill: "#2c5c6c"
};
const buttonStyles = {
  width: "100%",
  padding: `${GRID_SIZE / 2}px 0`,
  textAlign: "center",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: 3
};
const optionStyles = {
  textAlign: "left",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: 3,
  padding: 0
};
const itemStyles = {
  display: "inline-block",
  textAlign: "center",
  width: GRID_SIZE,
  marginRight: GRID_SIZE,
  padding: GRID_SIZE,
  backgroundColor: "#2c5c6c",
  color: "white",
  borderRadius: "3px 0 0 3px",
  cursor: "pointer"
};
const dropdownStyles = {
  fontSize: 16
};
const submitStyles = {
  ...buttonStyles,
  marginTop: GRID_SIZE,
  backgroundColor: "#00b06f",
  color: "white"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [options[0]],
      options,
      submitted: false,
      showIcon: false
    };
    this.container = createRef();
  }

  handleDragEnd = dragEvent => {
    const {
      container: { current: container }
    } = this;
    const { destination, source, draggableId } = dragEvent;
    const menu = container.querySelector(`#${draggableId} select`);
    // Convert NodeList to array
    const menus = Array.from(container.querySelectorAll("select"));
    const preventReorder =
      menu.value === SKIP_VALUE ||
      menus.some(
        (m, i) =>
          m.value === SKIP_VALUE && destination && destination.index === i
      );
    // Dropped outside the list or an empty option is not last index
    if (!destination || preventReorder) {
      return;
    }
    const items = reorder(this.state.items, source.index, destination.index);
    this.setState({ items });
  };

  handleChange = event => {
    const {
      target,
      target: { value, previousValue, id }
    } = event;
    const {
      container: { current: container },
      state: { options, items }
    } = this;
    const menus = container.querySelectorAll("select");
    const menuId = parseInt(id.slice(-1));
    const hasPreviousValue = previousValue && previousValue !== SKIP_VALUE;
    if (hasPreviousValue) {
      const previousOptionIndex = options.findIndex(
        o => o.id === previousValue
      );
      options[previousOptionIndex].selected = false;
    }
    if (value !== SKIP_VALUE) {
      const optionIndex = options.findIndex(o => o.id === value);
      options[optionIndex].selected = true;
      if (!hasPreviousValue && menuId > 0) {
        this.setState({
          showIcon: true
        });
      }
      if (!hasPreviousValue && menuId < options.length - 1) {
        items.push(options[menuId + 1]);
      }
    } else if (hasPreviousValue) {
      menus.forEach((menu, i) => {
        const { value: menuValue } = menu;
        if (i > menuId) {
          items.pop();
          const option = options.find(o => o.id === menuValue);
          if (option) {
            option.selected = false;
          }
        }
      });
    }
    target.previousValue = value;
    this.setState({ options, items });
  };

  handleSubmit = () => {
    this.setState({ submitted: !this.state.submitted });
  };

  render() {
    return (
      <div ref={this.container}>
        <h1 style={{ textAlign: "center" }}>Rank your favorite candidates</h1>
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <form
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.items.map((item, i) => (
                  <Draggable key={item.id} draggableId={item.id} index={i}>
                    {(provided, snapshot) => (
                      <div
                        id={`option-${i}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          ),
                          ...optionStyles
                        }}
                        key={item.id}
                      >
                        {i < this.state.items.length - 1 && (
                          <svg
                            style={{
                              ...iconStyles,
                              opacity: this.state.showIcon ? 1 : 0
                            }}
                          >
                            <path
                              d="M13.7578943,16.6318165 L10.6642975,19.7254012 C10.2981644,20.0915329 9.70460909,20.0915329 9.33847592,19.7254012 L6.24487915,16.6318165 C5.65429263,16.0412323 6.07257429,15.0313915 6.90780948,15.0314306 L8.90632706,15.0314306 L8.90628799,11.0937468 L4.9686279,11.0937468 L4.9686279,13.0922566 C4.9686279,13.9274885 3.95882223,14.3457685 3.36819665,13.7551843 L0.274599878,10.6615996 C-0.0915332925,10.2954679 -0.0915332925,9.70187587 0.274599878,9.3357832 L3.36819665,6.24219851 C3.95878316,5.6516143 4.9686279,6.06989433 4.9686279,6.90512625 L4.9686279,8.9062532 L8.90628799,8.9062532 L8.90628799,4.96860849 L6.90511417,4.96860849 C6.06987897,4.96860849 5.65159732,3.95880676 6.24218383,3.36818349 L9.3357806,0.274598805 C9.70191377,-0.091532935 10.295469,-0.091532935 10.6616022,0.274598805 L13.755199,3.36818349 C14.3457855,3.9587677 13.9275038,4.96860849 13.0922686,4.96860849 L11.0937511,4.96860849 L11.0937511,8.9062532 L15.0314112,8.9062532 L15.0314112,6.90774343 C15.0314112,6.07251151 16.0412168,5.65423148 16.6318034,6.24481569 L19.7254001,9.33840038 C20.0915333,9.70453212 20.0915333,10.2981241 19.7254001,10.6642168 L16.6318034,13.7578015 C16.0412168,14.3483857 15.0313721,13.9301057 15.0314112,13.0948737 L15.0314112,11.0937468 L11.0937901,11.0937468 L11.0937901,15.0313915 L13.094964,15.0313915 C13.9301992,15.0313915 14.3484808,16.0411932 13.7578943,16.6318165 Z"
                              id="Path"
                            />
                          </svg>
                        )}
                        <label style={itemStyles} htmlFor={`menu-${i}`}>
                          {i + 1}
                        </label>
                        <select
                          id={`menu-${i}`}
                          style={dropdownStyles}
                          onChange={this.handleChange}
                        >
                          <option defaultValue value={SKIP_VALUE}>
                            Select an option (or skip)
                          </option>
                          {this.state.options.map((o, j) => (
                            <option
                              key={o.id}
                              value={o.id}
                              disabled={o.selected}
                            >
                              {o.candidate}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <div onClick={this.handleSubmit} style={submitStyles}>
                  {this.state.submitted ? "Nice!" : "Submit"}
                </div>
              </form>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
