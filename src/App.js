import React, { Component, createRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const options = [
  { candidate: "Barack Obama", id: "option-0", selected: false },
  { candidate: "George Bush", id: "option-1", selected: false },
  { candidate: "Hillary Clinton", id: "option-2", selected: false },
  { candidate: "Bernie Sanders", id: "option-3", selected: false },
  { candidate: "Marco Rubio", id: "option-4", selected: false },
  { candidate: "George Washington", id: "option-5", selected: false },
  { candidate: "John Adams", id: "option-6", selected: false },
  { candidate: "Abraham Lincoln", id: "option-7", selected: false },
  { candidate: "Franklin D. Roosevelt", id: "option-8", selected: false },
  { candidate: "Ron Swanson", id: "option-9", selected: false }
];

// Reorder the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  // Change background colour if dragging
  background: isDragging ? "lightgreen" : "#d8d8d8",
  // Styles to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  width: 250,
  margin: "0 auto"
});

const buttonStyles = {
  width: "100%",
  padding: "8px 0",
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
  marginRight: 8,
  padding: 8,
  backgroundColor: "#2c5c6c",
  color: "white",
  borderRadius: "3px 0 0 3px",
  cursor: "pointer"
};
const dropdownStyles = {
  fontSize: 15
};
const submitStyles = {
  ...buttonStyles,
  marginTop: 20,
  backgroundColor: "#00b06f",
  color: "white"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [options[0]],
      options,
      submitted: false
    };
    this.container = createRef();
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
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
    const hasPreviousValue = previousValue && previousValue !== "skip";
    if (hasPreviousValue) {
      const previousOptionIndex = options.findIndex(
        o => o.candidate === previousValue
      );
      options[previousOptionIndex].selected = false;
    }
    if (value !== "skip") {
      const optionIndex = options.findIndex(o => o.candidate === value);
      options[optionIndex].selected = true;
      if (!hasPreviousValue && menuId < options.length - 1) {
        items.push(options[menuId + 1]);
      }
    } else if (hasPreviousValue) {
      menus.forEach((menu, i) => {
        const { value: menuValue } = menu;
        if (i > menuId) {
          items.pop();
          const option = options.find(o => o.candidate === menuValue);
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
        <DragDropContext onDragEnd={this.onDragEnd}>
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
                        key={item.candidate}
                      >
                        <label style={itemStyles} htmlFor={`menu-${i}`}>
                          {i + 1}
                        </label>
                        <select
                          id={`menu-${i}`}
                          style={dropdownStyles}
                          onChange={this.handleChange}
                        >
                          <option defaultValue value="skip">
                            Select an option (or skip)
                          </option>
                          {this.state.options.map((o, j) => (
                            <option
                              key={o.candidate}
                              value={o.candidate}
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
