/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
// in linked lists, new nodes are appended to existing nodes
// if appending to the head, which contains properties of value and next,
    //head (not head.next) will be reassigned to newNode

function linkedListGenerator() {
  var head = null;  // to start, there is no head or tail
  var tail = null;  // assign both to null (could be global variables)
  var length = 0;  //  start value of linked list should be zero

  var module = {  //create module to share functionality/link functions needed for list
    getHead : _getHead,  //allows one function access another within scope
    getTail : _getTail,  //allows for additions to module without altering existing functions
    add : _add,          //i.e. minimizes potential to break program with addition of new functions
    get : _get,          //because added functions refer to existing functions,
    remove : _remove,    //but do not change existing functions
    insert : _insert
  };

  function createNode(value) { //newly created node will have a value, but no next/pointer
    length++;                   //new node should increment length
    return {                    //new node should return object properties
      value : value,    //key 'value' : value 'value'
      next : null       //key 'next' : value 'null' - new node will have a value of null
    };                  // will not have a pointer to a new node because no new node exists

  }

  function _getHead() {  //return value of first node in list
    return head;
  }

  function _getTail() {  //return value of last node in list
    return tail;
  }

  function _add(value) {  //add new node to end of list
    var newNode = createNode(value); //store createNode function into variable
    if (head === null) {  // if there is no head, create new node for head
      head = newNode;         //also works if tail === null
    } else {
      tail.next = newNode;    //if there is a node, head points to new node
    }
    tail = newNode;         //create new node at tail
    return newNode;           //return the variable holding createNode
  }

  function _get(numb) {  // search for nth node in list (always starts from head)
    var startFrom = head;  //store value of first node into new variable
    if (numb < length) {  // conditional to run as long as requested number does not exceed length
      for (var i = 0; i < numb; i++) { //loop through based on numb
        startFrom = startFrom.next;  //when found, stored head is reassigned to head.next
      }
      return startFrom;  //return stored head
    } else {
      return false;
    }
  }

  function _remove(numb) {  //remove nth node from list
// first store current node and previous nod into variables
    var current = _get(numb);  //do not need to created new conditionals or loops
    var previous = _get(numb - 1); //because _get(numb) has already done the work
// create conditional to check against numb outside of searchable range
    if (numb < 0 || numb >= length) { //if numb is negative or >= length
      return false; //can not remove outside of length of list
// check for lists with only one node
    } else if (length === 1) {
      head = null; //if removing only node, head and head.next = null;
      head.next = null;
// check for lists with two nodes
    } else if (length === 2) {
      // if (numb === 0) {
      head = head.next; //covers both nodes if either is removed
      tail = null;
      // }
    } else if (length > 2) { //if length has at least three nodes
      if (numb === 0) { //removing the head
        head = head.next; //head becomes head.next (head with pointer)
      } else if (numb === length - 1) { //if removing last node
        previous.next = null; //previous pointer becomes null
        tail = previous; //tail becomes previous
      } else { //if removing any middle node
        previous.next = current.next; //previous pointer becomes current pointer
      }
      length--; //decrement length
    }
  }

  function _insert(value, numb) {  //insert node into specified position
// store current, previous, and createNode into variables
    var current = _get(numb);
    var previous = _get(numb - 1);
    var newNode = createNode(value);
// set disqualifiers
    if (numb >= length - 1 || numb < 0) { //number >= last element because rules
      return false;                       //state that element cannot be inserted to end
    //set condition for inserted before first node
    } else if (numb === 0) {
      newNode.next = current //newNode points to former current
      head = newNode; // newNode becomes head
    } else if (numb <= length - 1) { //inserting internally
      previous.next = newNode;
      newNode.next = current;
    }
    length++;
  }

  return module;
}
