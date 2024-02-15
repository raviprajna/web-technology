// Remove document body
document.body.remove();
// Create new empty body
document.body = document.createElement('body');

// Create stack container div
const stackContainer = document.createElement('div');

// Create stack container label
const stackLabel = document.createElement('label');
stackLabel.innerHTML = 'Stack Demo';

// Add classes to stack container and label
stackContainer.classList.add('stack-container');
stackLabel.classList.add('stack-label');
// Generate css for stack container
stackContainer.style.cssText = `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-sizing: border-box;
  overflow-y: auto;
`;

// Generate style for stack label
stackLabel.style.cssText = `
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

// Generate style for stack item
const stackItemStyle = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

// Append stack container and label to body
document.body.appendChild(stackLabel);
document.body.appendChild(stackContainer);

// Create a function to push items to stack container
function pushItem(value) {
    // Alert user if stack size execeed 10 items
    if (stackContainer.children.length >= 10) {
        alert('Stack Overflow');
        return;
    }
  // Create new stack item div
  const stackItem = document.createElement('div');
  stackItem.classList.add('stack-item');
  stackItem.innerHTML = value;
  stackContainer.prepend(stackItem);
}

// Create a function to pop items from stack container
function popItem() {
    // Alert user if stack is empty
    if (stackContainer.children.length === 0) {
        alert('Stack Underflow');
        return;
    }
  // Remove last stack item
  stackContainer.removeChild(stackContainer.firstChild);
}
