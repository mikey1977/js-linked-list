/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  var head  = null;
  var tail = null;
  var length = 0;


  var newLinkedList = {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };
  function createNode(value) {
    length++;
    return {
      value : value,
      next : null
    };

  }

  function _getHead() {
    return head;
  }

  function _getTail() {

    return tail;
  }

  function _add(value) {
    var newNode = createNode(value);


    if (newLinkedList.getTail() === null) {
      head = newNode;

    } else {
      console.log(_getTail());


      newLinkedList.getTail().next = newNode;

    }
    tail = newNode;

    return newNode;
  }

    // var newNode = createNode(value);
    // if (length === 0) {
    //   head = newNode;
    //   length++;
    //   return head;
    // } else {
    //   var tail = head;
    //   for (var i = 0; i <= length; i++) {
    //     tail = tail.next;
    //   }
    //   tail = newNode;
    //   return tail;
    // }



  //   if (newLinkedList._getTail() === null) {
  //     head = newNode;
  //     tail = newNode;
  //   } else {
  //     newLinkedList._getTail().next = newNode;
  //     tail = newNode;
  //   }

  // }

  function _get(n) {
    var poop = head;
    if (n < length) {
    for (var i = 0; i < n; i++) {
      poop = poop.next;
    }
    return poop;
    } else {
      return false;
    }
  }

  function _remove(n) {
    var prevCrap = _get(n-1);
    var currentCrap = _get(n);
    if (currentCrap === head) {  //if node to remove is the head
      head = currentCrap.next;   //next node is reassigned as head
    }


  }
  function _insert(value, n) {

  }

  return newLinkedList;
}
